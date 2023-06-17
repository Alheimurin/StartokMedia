import { Link } from "react-router-dom"

import './navbar.css'


function NavBar () {
    return (
        <div className="header">
            <Link className="header__logo"></Link>
            <div className="header__left">
                <nav className="header__navigation">
                    <div className="header__list">
                        <div className="header__list__menu">
                            <Link className="header__list-item">INFLUENCE</Link>
                            <span className="menu"></span>
                            <div className="dropdown">
                                <div className="dropdown__content">
                                    <div>
                                        <Link className="dropdown__content-links">
                                            BRAND
                                            <svg className="dropdown__content-arrows"></svg>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="dropdown__content-links">
                                            MUSIC
                                            <svg className="dropdown__content-arrows"></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="header__list-item">BRANDING</Link>
                        <Link className="header__list-item">КОНТАКТЫ</Link>
                    </div>
                </nav>
            </div>
            <div className="header__right">
                <nav className="header__navigation">
                    <div className="header__listLang">
                        <button autoFocus className="header__listLang-item">RU</button>
                        <button disabled='disabled' className="header__listLang-item">EN</button>
                        <button disabled='disabled' className="header__listLang-item">CH</button>
                    </div>
                </nav>
                <button className="header__button">Оставить заявку</button>
            </div>
        </div>
    )
}

export default NavBar