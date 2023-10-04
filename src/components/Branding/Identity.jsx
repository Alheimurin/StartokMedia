import NavBar from '../NavBar/NavBar.jsx'
import GradientCard from '../Cards/GradientCard/Card.jsx'
import OrderBlock from '../Orders/OrderBlock/OrderBlock.jsx'
import SubBranding from '../SubItems/SubBranding.jsx'
import OtherServices from '../OtherServices/OtherServices.jsx'
import RequestBlackWords from '../Tickers/RequestBlackWords/BlackWords.jsx'
import Form from '../Form/Form.jsx'
import Footer from '../Footer/Footer.jsx'
import FormPopUp from '../popup/FormPopUp/FormPopUp.jsx'
import ModalFormMobile from '../popup/FormPopUpMobile/FormPopUpMobile.jsx'
import { lang } from '../../constants/constants'

import './identity.css'
import '../fonts/Fonts.css'

import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

function Identity ({setCurrLang, getLocale}) {

    const [formShow, setFormShow] = useState(false)

    const [mobileForm, setMobileForm] = useState(false)

    const showModalForm = () => {
        setFormShow(true)
        setMobileForm(true)
    }

    return (
        <div>
            <header className='identity__header'>
                <div className='identityNav'>
                    <NavBar showModalForm={showModalForm}
                    identity={true}
                    setCurrLang={setCurrLang}
                    getLocale={getLocale}
                    />
                </div>

                <div className='identity__header-container'>
                    <div className='identity__header-content'>
                        <div>
                            <h2 className='identity__header-title'>Branding, websites</h2>
                            <p className='identity__header-text'>IDENTITY & UX/UI-DESIGN</p>
                        </div>

                        <div className='identity__header-card'>
                            <GradientCard
                                title='BRANDING'
                                text='Design & Development'
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className='identity__style'>
                    <div className='identity__content'>
                        <h2 className='identity-title'>
                            <FormattedMessage id='devTitle'/> 
                            <span className='identity-gradient'> 
                                <FormattedMessage id='devColor'/>
                            </span> 
                            <FormattedMessage id='devTitleEnd'/>
                        </h2>
                        <div className='identity-container'>
                            <div className='identity__style-left'>
                                <img className='identity__style-leftIMG' src={lang === 'ru' ? "UI/identityStyle.svg" : "UI/identityStyleENG.svg"}/>
                            </div>
                            <div className='identity__style-right'>
                                <div className='identity__style-Text'>
                                    <p className='identity-text'>
                                        <FormattedMessage id='devDescTop'/>
                                    </p>
                                    <p className='identity-text'>
                                        <FormattedMessage id='devDescBot'/>
                                    </p>
                                </div>
                                <div className='identity__style-rightButton'>
                                    <OrderBlock
                                        text = {<FormattedMessage id='devOrderDesc'/>}
                                        showModalForm={showModalForm}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mobile'>
                            <OrderBlock
                                text = {<FormattedMessage id='devOrderDesc'/>}
                                showModalForm={showModalForm}
                            />
                        </div>
                    </div>
                </div>

                <div className='identity__dev'>
                    <div className='identity__dev-container'>
                        <div>
                            <h2 className='identity-title'>
                                <span className='identity-gradient'>
                                    <FormattedMessage id='designTitle'/>
                                </span>
                                <FormattedMessage id='designTitleEnd'/></h2>
                            <div className='identity__style-Text dev-text'>
                                <p className='identity-text'>
                                    <FormattedMessage id='designDescTop'/>
                                </p>
                                <p className='identity-text'>
                                    <FormattedMessage id='designDescBot'/>
                                </p>
                            </div>
                            <div className='identity__dev-button'>
                                <OrderBlock
                                    text = {<FormattedMessage id='designOrderDesc'/>}
                                    showModalForm={showModalForm}
                                />
                            </div>
                        </div>
                        
                        <div className='identity__dev-img'>
                            <img className='dev-imgOne' src="UI/identityDev2.svg" alt="" />
                            <img className='dev-imgTwo' src="UI/identityDev.svg" alt="" />
                        </div>

                        <div className='mobile'>
                            <OrderBlock
                                text = {<FormattedMessage id='designOrderDesc'/>}
                                showModalForm={showModalForm}
                            />
                        </div>
                    </div>
                </div>

                <div className='identity__dev-sub'>
                    <SubBranding
                        img='UI/devShure.svg'
                        title = {<FormattedMessage id='subDesignTitle'/>}
                        text = {<FormattedMessage id='subDesignDesc'/>}
                    />
                    <hr className='identity__dev-subHR'/>
                    <SubBranding
                        img='UI/devStar.svg'
                        title = {<FormattedMessage id='subDevTitle'/>}
                        text = {<FormattedMessage id='subDevDesc'/> }
                    />
                </div>

                <div>
                    <OtherServices
                        leftTitle='INFLUENCE BRAND'
                        leftText = {<FormattedMessage id='identityLeftOther'/>}
                        leftLink='/company'
                        rightTitle='INFLUENCE MUSIC'
                        rightText = {<FormattedMessage id='identityRightOther'/>}
                        rightLink='/music'
                    />
                </div>

                <div>
                    <RequestBlackWords/>
                </div>
                
                <div>
                    <Form/>
                </div>
            </main>

            <footer>
                <div>
                    <Footer
                        setCurrLang={setCurrLang}
                    />
                </div>
            </footer>
            <FormPopUp
                active={formShow}
                setActive={setFormShow}
            />
            <ModalFormMobile
                MobileForm={mobileForm}
                setMobileForm={setMobileForm}
            />
        </div>
    )
}

export default Identity