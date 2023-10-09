import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import './mobileBurgerPopUp.css'
import '../../fonts/Fonts.css'

import ModalFormMobile from '../FormPopUpMobile/FormPopUpMobile.jsx'
import { LOCALES } from '../../../i18n/locales'

function MobileBurger ({showBurger, setShowBurger, setMobileFormMenu, setCurrLang}) {

    const [drop, setDrop] = useState(false)

    const [mobileForm, setMobileForm] = useState(false)

    const locale = {
        en: LOCALES.ENGLISH,
        ru: LOCALES.RUSSIAN
    }

    const lang = localStorage.getItem('locale')

    function setLocaleEN () {
        localStorage.setItem('locale', locale.en)
        window.location.reload()
    } 
    function setLocaleRU () {
        localStorage.setItem('locale', locale.ru)
        window.location.reload()
    }     

    return (
        <div>
            <div className={showBurger? "burgerBox burgerBox__show" : "burgerBox"}>
                <div className='burgerBox__head'>
                    <Link to="/" className="burgerBox__logo"></Link>
                    <div onClick={()=> setShowBurger(false)} className='burgerBox__close'></div>
                </div>
                <div className='burgerBox__menu'>
                    <h3 className='title'>Menu</h3>
                    <div className='burgerBox__menuLinks'>
                        <hr className='burgerBox__line'/>
                        <div className='burgerBox__dropdown'>
                            <div onClick={()=>setDrop(!drop)} className='burgerBox__drop'>
                                <h3 className='burgerBox__link'>INFLUENCE</h3>
                                <div className={drop ? 'burgerBox__arrow rot' : 'burgerBox__arrow'}></div>
                            </div>
                            <div className={drop ?'dropdownMenuShow' : 'dropdownMenu'}>
                                <hr className='burgerBox__line'/>
                                <Link to='/company' className='burgerBox__link'>BRAND</Link>
                                <hr className='burgerBox__line'/>
                                <Link to='/music' className='burgerBox__link'>MUSIC </Link>
                            </div>
                        </div>
                        <hr className='burgerBox__line'/>
                        <Link to='/identity' className='burgerBox__link'>BRANDING</Link>
                        <hr className='burgerBox__line'/>
                        <Link to='/contacts' className='burgerBox__link'><FormattedMessage id='navContacts'/></Link>
                        <hr className='burgerBox__line'/>
                    </div>
                </div>

                <div className='burgerBox__lang'>
                    <h3 className='title'><FormattedMessage id='navLang'/></h3>
                    <ul className='burgerBox__langList'>
                        <button onClick={()=>{setCurrLang(locale.ru); setLocaleRU()}} className={lang === 'ru' ? 'lang__item lang__itemActive' : 'lang__item'}>RU</button>
                        <button onClick={()=>{setCurrLang(locale.en); setLocaleEN()}} className={lang === 'en' ? 'lang__item lang__itemActive' : 'lang__item'}>EN</button>
                        <button disabled='disabled' className={lang === 'cn' ?'lang__item lang__itemActive' : 'lang__item'}>CN</button>
                    </ul>
                    <button onClick={()=>setMobileForm(true)} className='burgerBox__button'><FormattedMessage id='submitRequest'/></button>
                </div>
                <ModalFormMobile
                    MobileForm={mobileForm}
                    setMobileForm={setMobileForm}
                />
            </div>
        </div>
    )
}

export default MobileBurger