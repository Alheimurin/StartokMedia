import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import QRPopUp from '../popup/QRPopUp/QRPopUp.jsx'
import { LOCALES } from '../../i18n/locales.js'
import ComingSoon from '../popup/Soon/Soon.jsx'

import './footer.css'

function Footer ({setCurrLang}) {

    const [showQR, setShowQR] = useState(false)
    const [descName, setDescName] = useState('')
    const [descImg, setDescImg] = useState('')

    const locale = {
        en: LOCALES.ENGLISH,
        ru: LOCALES.RUSSIAN
    }

    function setLocaleEN () {
        localStorage.setItem('locale', locale.en)
        window.location.reload()
    } 
    function setLocaleRU () {
        localStorage.setItem('locale', locale.ru)
        window.location.reload()
    } 
    
    const lang = localStorage.getItem('locale')
    const policyLink = {
        ru: 'https://drive.google.com/file/d/1ytQyOG2bAIXH9vFNwc4rPmYO0cQWs3lr/view?pli=1',
        en: 'https://drive.google.com/file/d/1Yj40Mz1cplIDTnMa_umYRikBcfQj54yt/view?pli=1'
    }
    
    return (
        <footer className='footer__content'>
            <div className='footer__content-container'>
                <div className='footer__container'>
                    <div className='footer__left'>
                    <div className="footer__leftContainer">
                        <div>
                            <Link to='/' className='footer__left-img'></Link>
                        </div>
                        <div className='footer__left-policy'>
                            <Link target='blank' to={lang === 'en' ? policyLink.en : policyLink.ru} className='footer__left-policyTitle'>
                                <FormattedMessage id='footerPolicy'/>
                            </Link>
                            <p className='footer__left-policyText'>
                                <FormattedMessage id='footerPolicyDesc'/>
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className='footer__right'>

                    <div className='footer__rightTOP'>
                        <div className='footer__right-item'>
                            <h2 className='footer__right-itemTitle'>
                                <FormattedMessage id='footerLang'/>
                            </h2>
                            <div className='footer__right-itemLinks'>
                                <button onClick={()=>{setCurrLang(locale.ru); setLocaleRU()}} className='footer__right-itemLink'>RU</button>
                                <button onClick={()=>{setCurrLang(locale.en); setLocaleEN()}} className='footer__right-itemLink'>EN</button>
                                <button disabled='disabled' className='footer__right-itemLink'> CN </button>
                            </div>
                        </div>
                        <div className='footer__right-item'>
                            <h2 className='footer__right-itemTitle'>
                                <FormattedMessage id='menu'/>
                            </h2>
                            <div className='footer__right-itemLinks'>
                                <Link to='/company' className='footer__right-itemLink'>
                                    INFLUENCE BRAND
                                </Link>
                                <Link to='/music' className='footer__right-itemLink'>
                                    INFLUENCE MUSIC
                                </Link>
                                <Link to='/identity' className='footer__right-itemLink'>
                                    BRANDING
                                </Link>
                                <Link to='/contacts' className='footer__right-itemLink'>
                                    <FormattedMessage id='contacts'/>
                                </Link>
                            </div>
                        </div>
                        <div className='footer__right-item'>
                            <h2 className='footer__right-itemTitle'>
                                <FormattedMessage id='social'/>
                            </h2>
                            <div className='footer__right-itemLinks'>
                                <Link to='//vk.com/startokmedia' target='blank' className='footer__right-itemLink'>VKONTAKTE</Link>
                                <Link to='//instagram.com/startokmedia' target='blank' className='footer__right-itemLink'>INSTAGRAM*</Link>
                                <Link to='//www.facebook.com/startokmedia' target='blank' className='footer__right-itemLink'>FACEBOOK*</Link>
                                <Link to='//t.me/startokmedia_info' target='blank' className='footer__right-itemLink'>TELEGRAM</Link>
                            </div>
                        </div>
                        <div className='footer__right-item'>
                            <h2 className='footer__right-itemTitle'>
                                <FormattedMessage id='contactus'/>
                            </h2>
                            <div className='footer__right-itemLinks'>
                                <Link to="#" onClick={() => window.location = 'mailto:PR@STARTOKMEDIA.RU'} className='footer__right-itemLink'>PR@STARTOKMEDIA.RU</Link>
                                <Link onClick={()=>{setShowQR(true); setDescName('WeChat'); setDescImg('WeChat.svg')}} className='footer__right-itemLink'>WECHAT</Link>
                                <Link to='//www.linkedin.com/company/startok-media/' target='blank' className='footer__right-itemLink'>LINKEDIN</Link>
                                <Link to='//t.me/startokmedia' target='blank' className='footer__right-itemLink'>TELEGRAM</Link>
                                <Link to='//wa.me/87055338422' target='blank' className='footer__right-itemLink'>WHATSAPP*</Link>
                            </div>
                        </div>
                    </div>

                    <div className='footer__rightBOTTOM'>
                        <div className='footer__right-QR'>
                            <div className='footer__right-QRItem'>
                                <Link onClick={()=>{setShowQR(true); setDescName('WeChat'); setDescImg('WeChat.svg')}} className='footer__right-QRWe QRBlock'></Link>
                                <Link onClick={()=>{setShowQR(true); setDescName('WeChat'); setDescImg('WeChat.svg')}} className='footer__right-QRTitle'>WeChat</Link>
                            </div>
                            <div className='footer__right-QRItem'>
                                <Link onClick={()=>{setShowQR(true); setDescName('LinkedIn'); setDescImg('Linked.svg')}} className='footer__right-QRLinked QRBlock'></Link>
                                <Link onClick={()=>{setShowQR(true); setDescName('LinkedIn'); setDescImg('Linked.svg')}} className='footer__right-QRTitle'>LinkedIn</Link>
                            </div>
                            <div className='footer__right-QRItem'>
                                <Link onClick={()=>{setShowQR(true); setDescName('Email'); setDescImg('Email.svg')}} className='footer__right-QREmail QRBlock'></Link>
                                <Link onClick={()=>{setShowQR(true); setDescName('Email'); setDescImg('Email.svg')}} className='footer__right-QRTitle'>Email</Link>
                            </div>
                            <div className='footer__right-QRItem'>
                                <Link onClick={()=>{setShowQR(true); setDescName('WhatsApp'); setDescImg('WApp.svg')}} className='footer__right-QRWApp QRBlock'></Link>
                                <Link onClick={()=>{setShowQR(true); setDescName('WhatsApp'); setDescImg('WApp.svg')}} className='footer__right-QRTitle'>WhatsApp</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='footer__left-policy mobile_policy'>
                <Link target='blank' to={lang === 'en' ? policyLink.en : policyLink.ru} className='footer__left-policyTitle'>
                    <FormattedMessage id='footerPolicy'/>
                </Link>
                <p className='footer__left-policyText'>
                    <FormattedMessage id='footerPolicyDesc'/>
                </p>
            </div>

            <div className='footer__bottom'>
                    <div className='footer__bottomItem'>
                        <h2 className='footer__bottomText'>
                            <FormattedMessage id='copyright'/>
                        </h2>
                    </div>
            </div>

            <QRPopUp
            active={showQR}
            setActive={setShowQR}
            name={descName}
            img={descImg}
            />
        </footer>
    )
}

export default Footer