package com.devsuperior.dsmeta.service;

import com.devsuperior.dsmeta.entity.Sale;
import com.devsuperior.dsmeta.repository.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Autowired
    private SalesRepository salesRepository;

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    public void sendSms(Long saleId) {

        Sale sale = salesRepository.findById(saleId).get();

        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

        Double valorTotal = sale.getAmount();

        String msg = "Vendedor: " + sale.getSellerName() + " foi destaque em: " + date
                + " com um total de: R$" + valorTotal + " vendidos.";

        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Message message = Message.creator(to, from, msg).create();

        System.out.println(message.getSid());
    }
}