package com.devsuperior.dsmeta.service;

import com.devsuperior.dsmeta.entity.Sale;
import com.devsuperior.dsmeta.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SaleService {

    @Autowired
    private SalesRepository salesRepository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate min = minDate.equals("") ? today : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
        return salesRepository.findSales(min, max, pageable);
    }
}