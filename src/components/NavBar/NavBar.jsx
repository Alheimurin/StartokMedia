import { Link } from "react-router-dom"
import { useState } from "react"

import './navbar.css'
import '../fonts/Fonts.css'

import MobileBurger from "../popup/MobileBurgerPopUp/MobileBurgerPopUp"

function NavBar ( {showModalForm, contacts, identity, influence} ) {

    const [show, setShow] = useState(false)

    const func = (x) => {
        x = true
    }

    return (
        <div>
            <div className="navBarComponent">
                <div className="navBar">
                    <Link to='/' className="navBar__logo"></Link>
                    <div className="navBar__left">
                        <nav className="navBar__center">
                            <div className="navBar__list">
                                <div className="navBar__list__menu">
                                    <div className={ influence ? "navBar__list-item list-itemGradient" : "navBar__list-item" }>INFLUENCE</div>
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
                                <Link to='/identity'  className={ identity ? "navBar__list-item list-itemGradient" : "navBar__list-item" }>BRANDING</Link>
                                <Link to='/contacts'  className={ contacts ? "navBar__list-item list-itemGradient" : "navBar__list-item" }>КОНТАКТЫ</Link>
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
                        <button onClick={() => showModalForm(func)} className="navBar__button">Оставить заявку</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="navBarMobile">
                    <div>
                        <Link to="/" className="navBar__mobileLogo"></Link>
                    </div>
                    <div onClick={()=>setShow(true)} className="navBar__burger"></div>
                </div>
            </div>
            <MobileBurger
                showBurger={show}
                setShowBurger={setShow}
            />
        </div>
    )
}

export default NavBar