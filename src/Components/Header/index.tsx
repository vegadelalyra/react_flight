import './styles.sass';
import Logo from '../Logo';

const Header = () => {
    return (
        <div className='header__container'>
            <Logo />
            <div className='header__profile'>
                <figure className='header__profile__icons'>
                    <figcaption id='currency'>USD</figcaption>
                    <img
                        src='/assets/lang.svg'
                        alt='language'
                    />
                    <img
                        src='/assets/bell.svg'
                        alt='notifications'
                    />
                    <img
                        src='/assets/dummy.png'
                        alt='profile'
                        id='profile'
                    />
                </figure>
            </div>
        </div>
    );
};

export default Header;
