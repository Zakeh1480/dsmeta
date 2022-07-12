import notificationLogo from "../../assets/images/notificacao-icon.svg";
import "./styles.css";

export const NotificationButton = () => {
    return (
            <div className="btn-notificacao">
                <img src={notificationLogo} alt="icon-notificacao" />
            </div>
    );
}   