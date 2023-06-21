import OtherServices from '../OtherServices/OtherServices'
import NavBar from '../NavBar/NavBar'
import Card from '../Cards/GradientCard/Card'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'

import './companyBrand.css'
import '../fonts/Fonts.css'

function CompanyBrand () {
    return (
        <div>
            <header>
                <div className='company__header'>
                    <div className='company__header-nav'>
                        <NavBar/>
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
                                <Card title='Influence' text='Company & Brand'/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <main>
                <div className="company__main">
                    <div className='integration__container'>
                        <div className='integration___content-container'>
                            <h2 className='integration__contentTitle'>ИНТЕГРАЦИИ <span className='integration-gradient'>ДЛЯ</span> БРЕНДОВ</h2>
                            <p className='integration__contentText small-text'>
                                Есть идея или концепция рекламной кампании? 
                                Подберем блогеров и интегрируем рекламу вашего продукта во всех социальных сетях, 
                                на любой площадке и в любом формате.
                            </p>
                            <p className='integration__contentText'>
                                Опыт работы помог нам выделить основные преимущества: оперативность, 
                                высокое качество контента и вовлеченности аудитории у привлекаемых авторов, 
                                низкий CPM, соблюдение технического задания и дедлайнов.
                            </p>
                            <p className='integration__contentText'>
                                Только за счет выгодных, персонализированных и оперативных решений, 
                                реклама у авторов способна превзойти все ожидания 
                                и закрыть необходимый планируемый план по заданным или планируемым метрикам.
                            </p>
                        </div>

                        <div className='integration__content-wImg'>
                            <div className='imgContainer'>
                                <svg className='integration__contentImg left'></svg>
                                <p className='integration__contentImgText'>Партнерская сеть из более чем 700 авторов</p>
                            </div>

                            <hr className='centerLine'/>

                            <div className='imgContainer'>
                                <svg className='integration__contentImg center'></svg>
                                <p className='integration__contentImgText'>Размещение в СНГ, Азии и ОАЭ</p>
                            </div>

                            <hr className='centerLine'/>

                            <div className='imgContainer'>
                                <svg className='integration__contentImg right'></svg>
                                <p className='integration__contentImgText'>Реализовано более 60 проектов с брендами</p>
                            </div>
                        </div>

                        <div className='integration__connection'>
                            <p className='integration__contentText connectText'>Оставьте заявку и мы свяжемся с вами в течение 1 часа.</p>
                            <button className='integration__button'>Связаться</button>
                        </div>
                    </div>

                    <div className='conception__content'>
                        <div className="conception__content-container">
                            <p className='conception-text'>
                                Не знаете, как правильно подготовить <br /> промо-план и осуществить интеграцию авторов?
                            </p>
                            <h2 className='conception-title'>РАЗРАБАТЫВАЕМ КОНЦЕПЦИЮ РЕКЛАМНОЙ КОМПАНИИ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</h2>
                            <button className='conception-button'>Связаться</button>
                        </div>
                    </div>

                    <div>
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
                    </div>
                </div>
                <BlackTickerString/>
                <Form/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default CompanyBrand