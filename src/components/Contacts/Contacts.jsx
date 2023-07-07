import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import WhiteWords from '../Tickers/RequestWhiteWords/WhiteWords'
import Footer from '../Footer/Footer'
import QRPopUp from '../popup/QRPopUp/QRPopUp'

import './contacts.css'
import '../fonts/Fonts.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { set } from 'mobx'

function Contacts () {

    const [QRShow, setQRShow] = useState(false)

    function QR (e, name) {
        setQRShow(true)
        e.target.name = name
        console.log(name)
    }

    return (
        <div>
            <header>
                <div className='contacts__header'>

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
                                    <Link className='contacts__header-contactsText'>PR@STARTOKMEDIA.RU</Link>
                                </div>
                                <div className='contacts__header-contactsBox'>
                                    <p className='contacts__header-contactsTextTitle'>СРЕДСТВА СВЯЗИ</p>
                                    <div className='conntections'>
                                        <button onClick={QR} name='adasdas' className='contacts__header-contactsText'>WECHAT</button>
                                        <Link to='//t.me/startokmedia' target='blank' className='contacts__header-contactsText'>TELEGRAM</Link>
                                        <Link to='//wa.me/87055338422' target='blank' className='contacts__header-contactsText'>WHATSAPP</Link>
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
            <QRPopUp
                active={QRShow}
                setActive={setQRShow}
            />
        </div>
    )
}

export default Contacts