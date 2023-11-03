import './styles.sass'
import Logo from '../Logo'

const Footer = () => {
    return (
        <div className='footer__container'>
            <section className='footer__subscribe'>
                <Logo />
                <form action='' method='POST'>
                    <input></input>
                    <button></button>
                </form>
            </section>

            <table>
                <thead>
                    <tr>
                        <th>
                            <h3>About Us</h3>
                        </th>
                        <th>
                            <h3>Flight</h3>
                        </th>
                        <th>
                            <h3>Contact Us</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>How to book</td>
                        <td>Booking easily</td>
                        <td>***</td>
                    </tr>
                    <tr>
                        <td>Help center</td>
                        <td>Promotions</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Footer
