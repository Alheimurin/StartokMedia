import { Link } from "react-router-dom"

import './navbar.css'
import '../fonts/Fonts.css'

function NavBar () {
    return (
        <div className="navBarComponent">
            <div className="navBar">
                <Link to='/' className="navBar__logo"></Link>
                <div className="navBar__left">
                    <nav className="navBar__center">
                        <div className="navBar__list">
                            <div className="navBar__list__menu">
                                <Link className="navBar__list-item">INFLUENCE</Link>
                                <svg className="menuArrow"></svg>
                                <div className="dropdown">
                                    <div className="dropdown__content">
                                        <div className="dropdown__content-linksContainer">
                                            <Link to='/company' className="dropdown__content-links">
                                                BRAND
                                                <svg className="dropdown__content-arrows"></svg>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to='/music' className="dropdown__content-links">
                                                MUSIC
                                                <svg className="dropdown__content-arrows"></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to='/identity' className="navBar__list-item">BRANDING</Link>
                            <Link to='/contacts' className="navBar__list-item">КОНТАКТЫ</Link>
                        </div>
                    </nav>
                </div>
                <div className="navBar__right">
                    <nav className="navBar__navigation">
                        <div className="navBar__listLang">
                            <button autoFocus className="navBar__listLang-item">RU</button>
                            <button disabled='disabled' className="navBar__listLang-item">EN</button>
                            <button disabled='disabled' className="navBar__listLang-item">CH</button>
                        </div>
                    </nav>
                    <button className="navBar__button">Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar