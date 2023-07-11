import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Integration from '../IntegrationFor/Integration'
import OtherServices from '../OtherServices/OtherServices'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'
import Form from '../Form/Form'
import GradientCard from  '../Cards/GradientCard/Card'
import FormPopUp from '../popup/FormPopUp/FormPopUp'

import '../fonts/Fonts.css'
import './musicArtist.css'

import { useState } from 'react'

function MusicArtist () {

    const [formShow, setFormShow] = useState(false)

    const showModalForm = (x) => {
        setFormShow(true)
    }

    return (
        <div>
            <header>
                <div className='musicArtists__header'>
                    <div className='musicArtists__nav'>
                        <NavBar showModalForm={showModalForm}/>
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
                    for='МУЗЫКАНТОВ'
                    intTextOne='Более четырех лет выполняем размещения рекламы для лейблов, 
                            дистрибьюторов, продюсеров и артистов.'
                    intTextTwo='За этот срок успели выступить и побывать на интересных форумах 
                            и мероприятиях, поработать с западными «хитмейкерами» и начинающими артистами.'
                    intTextThree='Выполним рекламные размещения по доступному CPM, 
                            в утвержденные и сжатые сроки.'
                    imgOne='music.svg'
                    underImgOne='Реализовано более 560 музыкальных проектов'
                    imgTwo='target.svg'
                    underImgTwo='Выгодный CPM'
                    imgThree='clock.svg'
                    underImgThree='Работа в сжатые сроки'
                />
                <OtherServices
                    leftTitle='INFLUENCE BRAND'
                    leftText='Направление influence для брендов решает важную задачу 
                            доверия целевой аудитории. Правильная стратегия и промо-план позволит 
                            не только расположить людей к бренду, но и повысить его узнаваемость.'
                    rightTitle='BRANDING'
                    rightText='Бренд — образ в голове клиентов, а брендинг —процесс по созданию образа. 
                            Визуальная часть помогает правильно раскрыть заложенный смысл компании. 
                            Бренд должен быть узнаваемым, а дизайн — понятным.'
                />
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
        </div>
    )
}

export default MusicArtist