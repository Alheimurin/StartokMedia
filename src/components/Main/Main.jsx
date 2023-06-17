import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import './main.css'


function Main () {
    return (
        <section>
            <header>
                <div className='header__grid'>
                    <div className='header__nav'>
                        <NavBar/>
                    </div>

                    <div className='header__title'>
                        <h1 className='header__title-itemOne'>INFLUENCER</h1>
                        <h1 className='header__title-itemTwo'>MARKETING AGENCY</h1>
                    </div>

                    <nav className='header__cards'>
                        <Link className='header__card-influenceMusic'></Link>
                        <Link className='header__card-influenceCompany'></Link>
                        <Link className='header__card-branding'></Link>
                    </nav>
                </div>
                </header>

                <div className='header__ticker'>
                    <p className='header__ticker-item'></p>
                </div>

                <main>
                    <div className='main__cards'>
                        <div className='main__cards-itemOne'>
                            <h2 className='main__cards-itemTitleOne'><span className='item-gradient'>ПРЕИМУЩЕСТВА </span>РАБОТЫ С НАМИ</h2>
                            <p className='main__cards-itemTextOne'>Или почему нам доверяют?</p>
                        </div>
                        <div className='main__cards-item'>
                            <h2 className='main__cards-itemTitle'>
                                4 года
                                <svg className='item-img'></svg>
                                </h2>
                            <p className='main__cards-itemText'>Сопровождаем и создаем проекты с участием авторов</p>
                        </div>
                        <div className='main__cards-item'>
                            <h2 className='main__cards-itemTitle'>
                                Индивидуально
                                <svg className='item-img'></svg>
                            </h2>
                            <p className='main__cards-itemText'>Подходим к каждому запросу и подбираем релевантные решения для достижения целей</p>
                        </div>
                        <div className='main__cards-item'>
                            <h2 className='main__cards-itemTitle'>
                                Более 700
                                <svg className='item-img'></svg>
                            </h2>
                            <p className='main__cards-itemText'>Авторов в СНГ с возможностью индивидуального подбора блогеров в ОАЭ, Китае и Индии</p>
                        </div>
                        <div className='main__cards-itemBG'>
                            <div className='main__cards-itemTitleImgBG'>
                                <h2 className='main__cards-itemTitleBG'>
                                    Оперативный
                                </h2>
                                <svg className='item-img'></svg>
                            </div>
                            
                            <p className='main__cards-itemTextBG'>Менеджмент для достижения поставленных целей в кратчайшие сроки</p>
                        </div>
                    </div>

                    <div className='main__marketing'>
                        <div className='main__marketing-company'>
                            <div>
                                <h3 className='main__marketingTitle'>Influencer Marketing</h3>
                                <p className='main__marketingText'>COMPANY <span className='marketingGradient'>&</span> BRAND</p>
                                <div className='main__marketingArrowContainer'>
                                    <Link><svg className='main__marketingArrow'></svg></Link>
                                </div>
                            </div>
                        </div>
                        <div className='main__marketing-music'>
                            <div>
                                <h3 className='main__marketingTitle'>Influencer Marketing</h3>
                                <p className='main__marketingText'> MUSIC <br /> <span className='marketingGradient'>&</span> ARTISTS</p>
                                <div className='main__marketingArrowContainer'>
                                    <Link><svg className='main__marketingArrow'></svg></Link>
                                </div>
                            </div>
                        </div>
                        <div className='main__marketing-branding'>
                            <div>
                                <h3 className='main__marketingTitle'>Branding, websites</h3>
                                <div className='main__marketingTextImg'>
                                    <p className='main__marketingTextBG'>
                                        IDENTITY<span className='marketingGradient'> & </span> 
                                        UX/UI-DESIGN
                                    </p>
                                    <div className='main__marketingArrowContainer'>
                                        <Link><svg className='main__marketingArrow'></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main__idea'>
                        <div className='main__idea-left'>
                            <p className='main__idea-leftText'>ЕСЛИ ЕСТЬ ИДЕЯ, ЗНАЧИТ, ЕСТЬ РЕШЕНИЕ</p>
                        </div>
                        <div className='main__idea-right'>
                            <div className='img'></div>
                            <p className='main__idea-rightText'></p>
                        </div>
                    </div>

                    <div className='bottom__ticker'>
                        <p className='bottom_ticker-item'></p>
                    </div>

                    <Form/>
                </main>

                    <Footer/>
        </section>
    )
}

export default Main