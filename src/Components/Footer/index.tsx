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
import { RiMailFill } from 'react-icons/ri'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='footer__container'>
            <div className='footer__content'>
                <section className='footer__subscribe'>
                    <Logo />
                    <form>
                        <CustomInput icon={<RiMailFill color="gray" size={20} />} /> 
                        &nbsp; <CustomButton>Subscribe</CustomButton>
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
                            <td><span>How to book</span></td>
                            <td><span>Booking easily</span></td>
                            <td className='media_icons'>
                                <FontAwesomeIcon icon={faFacebook} />
                                &nbsp;
                                <FontAwesomeIcon icon={faTwitter} />
                                &nbsp;
                                <FontAwesomeIcon icon={faInstagram} />
                            </td>
                        </tr>
                        <tr>
                            <td><span>Help center</span></td>
                            <td><span>Promotions</span></td>
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
