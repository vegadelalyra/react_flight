import './styles.sass'
import Logo from '../Logo'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='footer__container'>
            <div className='footer__content'>
                <section className='footer__subscribe'>
                    <Logo />
                    <form>
                        <CustomInput></CustomInput> &nbsp;
                        <CustomButton>Subscribe</CustomButton>
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
                            <td>
                                <FontAwesomeIcon icon={faFacebook} />
                                &nbsp;
                                <FontAwesomeIcon icon={faTwitter} />
                                &nbsp;
                                <FontAwesomeIcon icon={faInstagram} />
                            </td>
                        </tr>
                        <tr>
                            <td>Help center</td>
                            <td>Promotions</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='footer__copyright'>
                <p>
                    &copy; {currentYear} Company, Inc. &bull; Privacy &bull;
                    Terms
                </p>
            </div>
        </div>
    )
}

export default Footer
