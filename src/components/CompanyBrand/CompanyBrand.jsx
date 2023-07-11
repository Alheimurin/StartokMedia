import OtherServices from '../OtherServices/OtherServices'
import NavBar from '../NavBar/NavBar'
import Card from '../Cards/GradientCard/Card'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import Integration from '../IntegrationFor/Integration'
import FormPopUp from '../popup/FormPopUp/FormPopUp'

import './companyBrand.css'
import '../fonts/Fonts.css'

import { useState } from 'react'

function CompanyBrand() {

    const [formShow, setFormShow] = useState(false)

    const showModalForm = (x) => {
        setFormShow(true)
    }

    return (
        <div>
            <header>
                <div className='company__header'>
                    <div className='company__header-nav'>
                        <NavBar  showModalForm={showModalForm}/>
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
                    for='БРЕНДОВ'
                    intTextOne='Есть идея или концепция рекламной кампании? 
                            Подберем блогеров и интегрируем рекламу вашего продукта во всех социальных сетях, 
                            на любой площадке и в любом формате.'
                    intTextTwo='Опыт работы помог нам выделить основные преимущества: оперативность, 
                            высокое качество контента и вовлеченности аудитории у привлекаемых авторов, низкий CPM, 
                            соблюдение технического задания и дедлайнов.'
                    intTextThree='Только за счет выгодных, персонализированных и оперативных решений, 
                            реклама у авторов способна превзойти все ожидания и закрыть необходимый планируемый план 
                            по заданным или планируемым метрикам.'
                    imgOne="phone.svg"
                    underImgOne='Партнерская сеть из более чем 700 авторов'
                    imgTwo='map.svg'
                    underImgTwo='Размещение в СНГ, Азии и ОАЭ'
                    imgThree='lamp.svg'
                    underImgThree='Реализовано более 60 проектов с брендами'
                />

                <div className='conception__content'>
                    <div className="conception__content-container">
                        <p className='conception-text'>
                            Не знаете, как правильно подготовить <br /> промо-план и осуществить интеграцию авторов?
                        </p>
                        <h2 className='conception-title'>РАЗРАБАТЫВАЕМ КОНЦЕПЦИЮ РЕКЛАМНОЙ КОМПАНИИ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</h2>
                        <button className='conception-button'>Связаться</button>
                    </div>
                </div>

                <OtherServices
                    leftTitle='INFLUENCE MUSIC'
                    leftText='При правильном подходе к тестированию и аналитике 
                            можно создать вирусную повторяющую механику, а также получить максимально быстрый 
                            и эффективный результат упоминаний на других площадках, 
                        что прямо пропорционально влияет на стриминг.'
                    rightTitle='BRANDING'
                    rightText='Бренд — образ в голове клиентов, а брендинг — процесс по созданию образа. 
                        Визуальная часть помогает правильно раскрыть заложенный смысл компании. 
                        Бренд должен быть узнаваемым, а дизайн — понятным.'
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
        </div>
    )
}

export default CompanyBrand