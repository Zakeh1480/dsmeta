import { NotificationButton } from '../NotificationButton';
import './styles.css';

export const SalesCard = () => {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div>
                    <div className="dsmeta-form-container">
                        <input className="dsmeta-form-input" type="date" />
                    </div>

                    <div className="dsmeta-form-container">
                        <input className="dsmeta-form-input" type="date" />
                    </div>
                </div>
            </div>

            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show-992">ID</th>
                        <th className="show-576">Data</th>
                        <th>Vendedor</th>
                        <th className="show-992">Visitas</th>
                        <th className="show-992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="show-992">#1</td>
                        <td className="show-576">10/07/2022</td>
                        <td>Isaque</td>
                        <td className="show-992">15</td>
                        <td className="show-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="btn-notificacao-container">
                            <div className="btn-notificacao-container">
                                <NotificationButton />
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show-992">#2</td>
                        <td className="show-576">10/07/2022</td>
                        <td>João</td>
                        <td className="show-992">15</td>
                        <td className="show-992">11</td>
                        <td>R$ 41000.00</td>
                        <td>
                            <div className="btn-notificacao-container">
                            <div className="btn-notificacao-container">
                                <NotificationButton />
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show-992">#3</td>
                        <td className="show-576">10/07/2022</td>
                        <td>Matheus</td>
                        <td className="show-992">15</td>
                        <td className="show-992">11</td>
                        <td>R$ 6300.00</td>
                        <td>
                            <div className="btn-notificacao-container">
                                <NotificationButton />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}