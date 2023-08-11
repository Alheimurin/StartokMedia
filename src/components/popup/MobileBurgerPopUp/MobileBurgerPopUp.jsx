import { Link } from 'react-router-dom'
import { useState } from 'react'

import './mobileBurgerPopUp.css'
import '../../fonts/Fonts.css'

function MobileBurger ({showBurger, setShowBurger}) {

    const [drop, setDrop] = useState(false)
    const [lang, setLang] = useState({
        RU: true,
        EN: false,
        CN: false
    })

    return (
        <div className={showBurger? "burgerBox burgerBox__show" : "burgerBox"}>
            <div className='burgerBox__head'>
                <Link className="burgerBox__logo"></Link>
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
                            <Link className='burgerBox__link'>BRAND</Link>
                            <hr className='burgerBox__line'/>
                            <Link className='burgerBox__link'>MUSIC </Link>
                        </div>
                    </div>
                    <hr className='burgerBox__line'/>
                    <Link className='burgerBox__link'>BRANDING</Link>
                    <hr className='burgerBox__line'/>
                    <Link className='burgerBox__link'>КОНТАКТЫ</Link>
                    <hr className='burgerBox__line'/>
                </div>
            </div>

            <div className='burgerBox__lang'>
                <h3 className='title'>Язык</h3>
                <ul className='burgerBox__langList'>
                    <button onClick={()=>setLang({RU:true})} className={lang.RU ?'lang__item lang__itemActive' : 'lang__item'}>RU</button>
                    <button onClick={()=>setLang({EN:true})} className={lang.EN ?'lang__item lang__itemActive' : 'lang__item'}>EN</button>
                    <button onClick={()=>setLang({CN:true})} className={lang.CN ?'lang__item lang__itemActive' : 'lang__item'}>CN</button>
                </ul>
                <button className='burgerBox__button'>Оставить заявку</button>
            </div>
        </div>
    )
}

export default MobileBurger