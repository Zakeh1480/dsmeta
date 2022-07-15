import axios from "axios";
import notificationLogo from "../../assets/images/notificacao-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
    saleId : number;
}

function handleClick(saleId : number){
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        console.log("funcionou");
    })
}

export const NotificationButton = ( {saleId} : Props ) => {
    return (
            <div className="btn-notificacao" onClick={() => handleClick(saleId)}>
                <img src={notificationLogo} alt="icon-notificacao" />
            </div>
    );
}   