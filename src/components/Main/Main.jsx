import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'
import FormPopUp from '../popup/FormPopUp/FormPopUp'
import ModalFormMobile from '../popup/FormPopUpMobile/FormPopUpMobile'
import { lang } from '../../constants/constants'

import './main.css'
import '../fonts/Fonts.css'

function Main ({setMobileFormMenu, setCurrLang, getLocale}) {

    const [hover, setHover] = useState({
        music: false,
        company: true,
        identity: false
    })

    const [cardInfo, setCardInfo] = useState('')
    const info = {
        musicInfo: <FormattedMessage id='mainHeaderCardMusic' />,
        companyInfo: <FormattedMessage id='mainHeaderCardCompany' />,
        identityInfo: <FormattedMessage id='mainHeaderCardIdentity' />
    }

    const [formShow, setFormShow] = useState(false)
    const showModalForm = (x) => {
        setFormShow(true)
    }
    const [MobileForm, setMobileForm] = useState(false)

    return (
        <div>
            <header className='main__header'>
                    <div className='main__header-nav'>
                        <NavBar 
                        showModalForm={showModalForm} 
                        setCurrLang={setCurrLang}
                        getLocale={getLocale}
                        />
                    </div>

                    <div className='main__header-container'>
                        <div className='main__header-containerTitle'>
                            <div>
                                <h1 className='main__header-containerItemOne'>INFLUENCER</h1>
                                <h1 className='main__header-containerItemTwo'>MARKETING AGENCY</h1>
                            </div>
                        </div>
                        <div className='main__header-cards'>
                            <nav className='main__header-cards_cards'>
                                <button onClick={()=>setMobileForm(true)} className='main__header-cards__button'><FormattedMessage id='submitRequest'/></button>
                                <Link to='/music' className='mainHeaderCard'>
                                    <img  onPointerOver={()=>{setCardInfo(info.musicInfo); setHover({music:true})}} onPointerOut={()=>{setCardInfo(info.companyInfo) ;setHover({company:true})}} className={hover.music ? 'cardImgHover cardImg' : 'cardImg'} src="/UI/mainHeaderCards/Music.svg" alt="" />
                                </Link>
                                <div>
                                    <div className='main__header-cards_desc_container'>
                                        <p className='main__header-cards_desc'>{cardInfo ? cardInfo : info.companyInfo}</p>
                                    </div>
                                    <Link to='/company' className='mainHeaderCard IC'>
                                    <img onPointerOver={()=>{setCardInfo(info.companyInfo); setHover({company:true})}} onPointerOut={()=>{setCardInfo(info.companyInfo); setHover({company:true})}} className={hover.company ? 'cardImgHover cardImg' : 'cardImg'} src="/UI/mainHeaderCards/Brand.svg" alt="" />
                                    </Link>
                                </div>
                                <Link to='/identity' className='mainHeaderCard'>
                                    <img onPointerOver={()=>{setCardInfo(info.identityInfo); setHover({identity:true})}} onPointerOut={()=>{setCardInfo(info.companyInfo); setHover({company:true})}}  className={hover.identity ? 'cardImgHover cardImg' : 'cardImg'} src="/UI/mainHeaderCards/Branding.svg" alt="" />
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className='main__header-ticker'>
                    <p className='main__header-tickerItem'></p>
                </div>

                <main>
                    <div className='main__content'>
                        <div className='main__content-cards'>
                            <div className='main__content-cardsItemOne'>
                                <h2 className='main__content-cardsItemOneTitle'>
                                    <span className='item-gradient'>
                                        <FormattedMessage id='advant'/>
                                    </span>
                                    <FormattedMessage id='mainContentCardAdvantTitle'/>
                                </h2>
                                <p className='main__content-cardsItemOneText'>
                                    <FormattedMessage id='mainContentCardAdvantText'/>
                                </p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    <FormattedMessage id='mainContentCardFourTitle'/>
                                    <svg className='item-img'></svg>
                                </h2>
                                <p className='main__content-cardsItemText'>
                                    <FormattedMessage id='mainContentCardFourText'/>
                                </p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    <FormattedMessage id='mainContentCardIndividTitle'/>
                                    <svg className='item-img'></svg>
                                </h2>
                                <p className='main__content-cardsItemText'>
                                    <FormattedMessage id='mainContentCardIndividText'/>
                                </p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    <FormattedMessage id='mainContentCardMoreTitle'/>
                                    <svg className='item-img'></svg>
                                </h2>
                                <p className='main__content-cardsItemText'>
                                    <FormattedMessage id='mainContentCardMoreText'/>
                                </p>
                            </div>
                            <div className='main__content-cardsItemBig'>
                                <div className='image-big'>
                                    <svg className='item-img'></svg>
                                </div>
                            
                                <div className='main__content-cardsItemBigContent'>
                                    <h2 className='main__content-cardsItemTitleBig'>
                                        <FormattedMessage id='mainContentCardPromptTitle'/>
                                    </h2>

                                    <div className='main__content-bigText'>
                                        <p className='main__content-cardsItemTextBig'>
                                            <FormattedMessage id='mainContentCardPromptText'/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='main__content-marketing'>

                        <div className='main__content-marketingContainer'>
                            <Link to='/company' className='main__content-marketingCompany arrows'>
                                <div className='main__content-marketingContent'>
                                    <h3 className='main__content-marketingTitle'>Influencer Marketing</h3>
                                    <p className='main__content-marketingText'>COMPANY <span className='main__content-marketingTextGradient'>&</span> BRAND</p>
                                    <p className='main__content-marketingInfo'>
                                        <FormattedMessage id='mainHeaderCardCompany'/>
                                    </p>
                                    <Link className='main__content-makertingButton'>
                                        <FormattedMessage id='more'/>
                                    </Link>
                                    <div className='main__content-marketingArrowContainer'>
                                        <svg className='main__content-marketingArrow main__content-marketingArrowAfter'></svg>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/music' className='main__content-marketingMusic arrows'>
                                <div className='main__content-marketingContent'>
                                    <h3 className='main__content-marketingTitle'>Influencer Marketing</h3>
                                    <p className='main__content-marketingText'> MUSIC <br /> <span className='main__content-marketingTextGradient'>&</span> ARTISTS</p>
                                    <p className='main__content-marketingInfo'>
                                        <FormattedMessage id='mainHeaderCardMusic'/>
                                    </p>
                                    <Link className='main__content-makertingButton'>
                                        <FormattedMessage id='more'/>
                                    </Link>
                                    <div className='main__content-marketingArrowContainer'>
                                        <svg className='main__content-marketingArrow'></svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                            <Link to='/identity' className='main__content-marketingBranding arrows'>
                                <div className='main__content-marketingContent'>
                                    <h3 className='main__content-marketingTitle'>Branding, websites</h3>
                                    <div className='main__content-marketingTextImg'>
                                        <p className='main__content-marketingTextBig'>
                                            IDENTITY<span className='main__content-marketingTextGradient'> & </span> 
                                            UX/UI-DESIGN
                                        </p>
                                        <p className='main__content-marketingInfo'>
                                            <FormattedMessage id='mainHeaderCardIdentity'/>
                                        </p>
                                        <Link className='main__content-makertingButton'>
                                            <FormattedMessage id='more'/>
                                        </Link>
                                        <div className='main__content-marketingArrowContainer'>
                                            <svg className='main__content-marketingArrow'></svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='main__content-idea'>
                            <div className="main__content-ideaContainer">
                                <div className='main__content-ideaLeft'>
                                    <p className='main__content-ideaLeftText'>
                                        <FormattedMessage id='idea'/>
                                    </p>
                                </div>
                                <div className='main__content-ideaRight'>
                                    <svg className='main__content-ideaRightImg'></svg>
                                    <svg className={lang === 'ru' ? 'main__content-ideaRightText' : 'main__content-ideaRightTextENG'}></svg>
                                </div>
                            </div>
                        </div>
                </div>
                    <BlackTickerString/>
                    <Form/>
                </main>
                <footer>
                    <Footer/>
                </footer>
                <FormPopUp
                    active={formShow}
                    setActive={setFormShow}
                />
                <ModalFormMobile
                    MobileForm={MobileForm}
                    setMobileForm={setMobileForm}
                />
        </div>
    )
}

export default Main