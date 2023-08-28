import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import WhiteWords from '../Tickers/RequestWhiteWords/WhiteWords'
import Footer from '../Footer/Footer'
import QRPopUp from '../popup/QRPopUp/QRPopUp'
import FormPopUp from '../popup/FormPopUp/FormPopUp'

import './contacts.css'
import '../fonts/Fonts.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Contacts () {

    const [QRShow, setQRShow] = useState(false)
    const [formShow, setFormShow] = useState(false)

    const showModalForm = (x) => {
        setFormShow(true)
    }

    return (
        <div>
            <header>
                <div className='contacts__header'>
                    <div className='contacts__header-nav'>
                        <NavBar showModalForm={showModalForm} 
                        contacts={true}/>
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
                                    <Link href="mailto:PR@STARTOKMEDIA.RU" className='contacts__header-contactsText'>PR@STARTOKMEDIA.RU</Link>
                                </div>
                                <div className='contacts__header-contactsBox'>
                                    <p className='contacts__header-contactsTextTitle'>СРЕДСТВА СВЯЗИ</p>
                                    <div className='conntections'>
                                        <Link onClick={()=>setQRShow(true)} className='contacts__header-contactsText'>WECHAT</Link>
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
                name = 'WeChat'
                img = 'WeChat.svg'
            />
            <FormPopUp
                active={formShow}
                setActive={setFormShow}
            />
        </div>
    )
}

export default Contacts