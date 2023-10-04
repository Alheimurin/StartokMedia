import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import Integration from '../IntegrationFor/Integration.jsx'
import OtherServices from '../OtherServices/OtherServices.jsx'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords.jsx'
import Form from '../Form/Form.jsx'
import GradientCard from  '../Cards/GradientCard/Card.jsx'
import FormPopUp from '../popup/FormPopUp/FormPopUp.jsx'
import ModalFormMobile from '../popup/FormPopUpMobile/FormPopUpMobile.jsx'

import '../fonts/Fonts.css'
import './musicArtist.css'

function MusicArtist ({setCurrLang, getLocale}) {

    const [formShow, setFormShow] = useState(false)

    const [mobileForm, setMobileForm] = useState(false)

    const showModalForm = (x) => {
        setFormShow(true)
        setMobileForm(true)
    }

    return (
        <div>
            <header>
                <div className='musicArtists__header'>
                    <div className='musicArtists__nav'>
                        <NavBar 
                            showModalForm={showModalForm}
                            influence={true}
                            setCurrLang={setCurrLang}
                            getLocale={getLocale}
                        />
                    </div>

                    <div className='musicArtists__header-container'>
                        <div className='musicArtists__header-content'>
                            <div className='musicArtists__header-contentContainer'>
                                <h2 className='musicArtists__title'>Influencer Marketing</h2>
                                <p className='musicArtists__text'>MUSIC <br /> & ARTISTS</p>
                            </div>
                            <div className='musicArtists__card'>
                                <GradientCard
                                    title='INFLUENCE'
                                    text='Music & Artists'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>

            <main>
                <Integration
                    for = {<FormattedMessage id='musicTitle'/>}
                    intTextOne = {<FormattedMessage id='musicDescOne'/>} 
                    intTextTwo = {<FormattedMessage id='musicDescTwo'/>}
                    intTextThree = {<FormattedMessage id='musicDescThree'/>}
                    imgOne = 'music.svg'
                    underImgOne = {<FormattedMessage id='musicCardDescLeft'/>}
                    imgTwo = 'target.svg'
                    underImgTwo = {<FormattedMessage id='musicCardDescCenter'/>}
                    imgThree = 'clock.svg'
                    underImgThree = {<FormattedMessage id='musicCardDescRight'/>}
                    showModalForm={showModalForm}
                />
                <OtherServices
                    leftTitle = 'INFLUENCE BRAND'
                    leftText = {<FormattedMessage id='musicLeftOther'/>}
                    leftLink = '/company'
                    rightTitle = 'BRANDING'
                    rightText = {<FormattedMessage id='musicRightOther'/>}
                    rightLink = '/identity'
                />
                <BlackTickerString/>
                <Form/>
            </main>

            <footer>
                <Footer
                    setCurrLang={setCurrLang}
                />
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

export default MusicArtist