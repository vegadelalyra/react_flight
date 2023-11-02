import './styles.sass'

const Header = () => {
    return (
        <div className='header__container'>
            <figure>
                <img src='/src/assets/logo.svg' id='logo' />
                <caption>E-flight</caption>
            </figure>
            <div className='header__profile'>
                <figure className='header__profile__icons'>
                    <caption id='currency'>USD</caption>
                    <img src='/src/assets/lang.svg' alt='language' />
                    <img src='/src/assets/bell.svg' alt='notifications' />
                    <img src='/src/assets/dummy.png' alt='profile' id='profile' />
                </figure>
            </div>
        </div>
    )
}

export default Header
