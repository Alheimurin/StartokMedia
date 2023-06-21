import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import WhiteWords from '../Tickers/RequestWhiteWords/WhiteWords'
import Footer from '../Footer/Footer'

import './contacts.css'
import '../fonts/Fonts.css'

function Contacts () {
    return (
        <div>
            <header>
                <div className='contacts__header'>

                <div className='gradients'>

                    <div className='contacts__header-nav'>
                        <NavBar/>
                    </div>

                    <div className='contacts__header-container'>
                        <div>
                            <svg className='contacts__header-img'></svg>
                        </div>
                            
                        <div className='contacts__header-contactsContainer'>
                            <h2 className='contacts__header-contactsTitle'>КОНТАКТЫ</h2>
                            <div className='contacts__header-contactsTextContainer'>
                                <div className='contacts__header-contactsBox'>
                                    <p className='contacts__header-contactsTextTitle'>ПОЧТА ДЛЯ СОТРУДНИЧЕСТВА</p>
                                    <p className='contacts__header-contactsText'>PR@STARTOKMEDIA.RU</p>
                                </div>
                                <div className='contacts__header-contactsBox'>
                                    <p className='contacts__header-contactsTextTitle'>СРЕДСТВА СВЯЗИ</p>
                                    <div className='conntections'>
                                        <p className='contacts__header-contactsText'>WECHAT</p>
                                        <p className='contacts__header-contactsText'>TELEGRAM</p>
                                        <p className='contacts__header-contactsText'>WHATSAPP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </header>

            <main>
                <WhiteWords/>
                <Form/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Contacts