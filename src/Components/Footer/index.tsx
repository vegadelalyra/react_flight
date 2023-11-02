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
                <tr>
                    <td>
                        <h3>About Us</h3>
                        <p>Information about our company and what we do.</p>
                    </td>
                    <td>
                        <h3>Flight</h3>
                        <p>Explore our flight services and options.</p>
                    </td>
                    <td>
                        <h3>Contact Us</h3>
                        <p>
                            Get in touch with us for any inquiries or
                            assistance.
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Footer
