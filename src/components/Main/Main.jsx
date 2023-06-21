import { Link } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import BlackTickerString from '../Tickers/RequestBlackWords/BlackWords'

import './main.css'
import '../fonts/Fonts.css'

function Main () {
    return (
        <div>
            <header className='main__header'>
                <div className='main__header-grid'>
                    <div className='main__header-nav'>
                        <NavBar/>
                    </div>

                    <div className='main__header-container'>

                    
                    <div className='main__header-containerTitle'>
                        <h1 className='main__header-containerItemOne'>INFLUENCER</h1>
                        <h1 className='main__header-containerItemTwo'>MARKETING AGENCY</h1>
                    </div>
                    
                    <nav className='main__header-cards'>
                        <Link className='main__header-cardsInfluenceMusic'></Link>
                        <Link className='main__header-cardsInfluenceCompany'></Link>
                        <Link className='main__header-cardsBranding'></Link>
                    </nav>
                    </div>
                </div>
                </header>

                <div className='main__header-ticker'>
                    <p className='main__header-tickerItem'></p>
                </div>

                <main >
                    <div className='main__content'>
                        <div className='main__content-cards'>
                            <div className='main__content-cardsItemOne'>
                                <h2 className='main__content-cardsItemOneTitle'><span className='item-gradient'>ПРЕИМУЩЕСТВА </span>РАБОТЫ С НАМИ</h2>
                                <p className='main__content-cardsItemOneText'>Или почему нам доверяют?</p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    4 года
                                    <svg className='item-img'></svg>
                                    </h2>
                                <p className='main__content-cardsItemText'>Сопровождаем и создаем проекты с участием авторов</p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    Индивидуально
                                    <svg className='item-img'></svg>
                                </h2>
                                <p className='main__content-cardsItemText'>Подходим к каждому запросу и подбираем релевантные решения для достижения целей</p>
                            </div>
                            <div className='main__content-cardsItem'>
                                <h2 className='main__content-cardsItemTitle'>
                                    Более 700
                                    <svg className='item-img'></svg>
                                </h2>
                                <p className='main__content-cardsItemText'>Авторов в СНГ с возможностью индивидуального подбора блогеров в ОАЭ, Китае и Индии</p>
                            </div>
                            <div className='main__content-cardsItemBig'>
                                <div className='main__content-cardsItemTitleImgBig'>
                                    <h2 className='main__content-cardsItemTitleBig'>
                                        Оперативный
                                    </h2>
                                    <svg className='item-img'></svg>
                                </div>
                                
                                <p className='main__content-cardsItemTextBig'>Менеджмент для достижения поставленных целей в кратчайшие сроки</p>
                            </div>
                        </div>

                        <div className='main__content-marketing'>

                        <div className='main__content-marketingContainer'>
                            <Link className='main__content-marketingCompany arrows'>
                                <div>
                                    <h3 className='main__content-marketingTitle'>Influencer Marketing</h3>
                                    <p className='main__content-marketingText'>COMPANY <span className='marketingGradient'>&</span> BRAND</p>
                                    <div className='main__content-marketingArrowContainer'>
                                        <svg className='main__content-marketingArrow main__content-marketingArrowAfter'></svg>
                                    </div>
                                </div>
                            </Link>
                            <Link className='main__content-marketingMusic arrows'>
                                <div>
                                    <h3 className='main__content-marketingTitle'>Influencer Marketing</h3>
                                    <p className='main__content-marketingText'> MUSIC <br /> <span className='marketingGradient'>&</span> ARTISTS</p>
                                    <div className='main__content-marketingArrowContainer'>
                                        <svg className='main__content-marketingArrow'></svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                            <Link className='main__content-marketingBranding arrows'>
                                <div>
                                    <h3 className='main__content-marketingTitle'>Branding, websites</h3>
                                    <div className='main__content-marketingTextImg'>
                                        <p className='main__content-marketingTextBig'>
                                            IDENTITY<span className='main__content-marketingTextGradient'> & </span> 
                                            UX/UI-DESIGN
                                        </p>
                                        <div className='main__content-marketingArrowContainer'>
                                            <Link><svg className='main__content-marketingArrow'></svg></Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='main__content-idea'>
                            <div className="main__content-ideaContainer">
                            <div className='main__content-ideaLeft'>
                                <p className='main__content-ideaLeftText'>ЕСЛИ ЕСТЬ ИДЕЯ, ЗНАЧИТ, ЕСТЬ РЕШЕНИЕ</p>
                            </div>
                            <div className='main__content-ideaRight'>
                                <svg className='main__content-ideaRightImg'></svg>
                                <svg className='main__content-ideaRightText'></svg>
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
        </div>
    )
}

export default Main