import OtherServices from '../OtherServices/OtherServices'
import NavBar from '../NavBar/NavBar'
import Card from '../Cards/GradientCard/Card'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import Integration from '../IntegrationFor/Integration'
import FormPopUp from '../popup/FormPopUp/FormPopUp'
import ModalFormMobile from '../popup/FormPopUpMobile/FormPopUpMobile'

import './companyBrand.css'
import '../fonts/Fonts.css'

import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

function CompanyBrand({setCurrLang, getLocale}) {

    const [formShow, setFormShow] = useState(false)

    const showModalForm = () => {
        setFormShow(true)
        setMobileForm(true)
    }

    const [mobileForm, setMobileForm] = useState(false)

    return (
        <div>
            <header>
                <div className='company__header'>
                    <div className='company__header-nav'>
                        <NavBar  
                        showModalForm={showModalForm}
                        influence={true}
                        setCurrLang={setCurrLang}
                        getLocale={getLocale}
                        />
                    </div>

                    <div className='company__header-container'>

                        <div className='company__header-сontent'>

                            <div className='company__header-contentContainer'>
                                <h2 className='company__header-containerTitle'>
                                    Influencer Marketing
                                </h2>
                                <p className='company__header-containerText'>COMPANY & BRAND</p>
                            </div>

                            <div className='company__header-containerCard'>
                                <Card title='INFLUENCE' text='Company & Brand' />
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <main>
                <Integration
                    for = {<FormattedMessage id='companyTitle'/>}
                    intTextOne = {<FormattedMessage id='companyDescOne'/>}
                    intTextTwo = {<FormattedMessage id='companyDescTwo'/>}
                    intTextThree = {<FormattedMessage id='companyDescThree'/>}
                    imgOne="phone.svg"
                    underImgOne = {<FormattedMessage id='companyCardDescLeft'/>}
                    imgTwo='map.svg'
                    underImgTwo = {<FormattedMessage id='companyCardDescCenter'/>}
                    imgThree='lamp.svg'
                    underImgThree = {<FormattedMessage id='companyCardDescRight'/>}
                    showModalForm={showModalForm}
                />

                <div className='conception__content'>
                    <div className="conception__content-container">
                        <div>
                            <p className='conception-text'>
                                <FormattedMessage id='conceptionDesc'/>
                            </p>
                            <h2 className='conception-title'>
                                <FormattedMessage id='conceptionTitle'/>
                            </h2>
                            <button onClick={()=>{setMobileForm(true);showModalForm()}} className='conception-button'><FormattedMessage id='connectButton'/></button>
                        </div>
                        
                        <img className='conception-img' srcSet="UX/conceptionRight.svg" alt="" />
                    </div>
                </div>

                <OtherServices
                    leftTitle = 'INFLUENCE MUSIC'
                    leftText = {<FormattedMessage id='companyLeftOther'/>}
                    leftLink = '/music'
                    rightTitle ='BRANDING'
                    rightText = {<FormattedMessage id='companyRightOther'/>}
                    rightLink = '/identity'
                />
                <BlackTickerString />
                <Form />
            </main>

            <footer>
                <Footer />
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

export default CompanyBrand