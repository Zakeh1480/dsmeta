import logo from '../../assets/images/logo.svg';
import './styles.css';

export const Header = () => {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="logo-dsmeta"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por
                <a href="https://www.linkedin.com/in/isaque-cruz-dos-santos-040960205" target="_blank"> @Isaque</a>
            </p>
        </div>
    </header>
    );
}