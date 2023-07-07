import { Link } from 'react-router-dom'

import './footer.css'

function Footer () {
    return (
        <footer className='footer__content'>
            <div className='footer__container'>
                <div className='footer__left'>
                <div className="footer__leftContainer">
                    <div>
                        <Link to='/' className='footer__left-img'></Link>
                    </div>
                    <div className='footer__left-policy'>
                        <h2 className='footer__left-policyTitle'>
                            Политика конфиденциальности
                        </h2>
                        <p className='footer__left-policyText'>
                            *продукт компании Meta, 
                            признанной экстремистской организацией 
                            и деятельность которой запрещена 
                            в Российской Федерации
                        </p>
                    </div>
                </div>
                </div>



                <div className='footer__right'>

                <div className='footer__rightTOP'>
                    <div className='footer__right-item'>
                        <h2 className='footer__right-itemTitle'>ЯЗЫК</h2>
                        <div className='footer__right-itemLinks'>
                            <Link className='footer__right-itemLink'>RU</Link>
                            <Link className='footer__right-itemLink'>EN</Link>
                            <Link className='footer__right-itemLink'>CN</Link>
                        </div>
                    </div>
                    <div className='footer__right-item'>
                        <h2 className='footer__right-itemTitle'>МЕНЮ</h2>
                        <div className='footer__right-itemLinks'>
                            <Link to='/company' className='footer__right-itemLink'>INFLUENCE BRAND</Link>
                            <Link to='/music' className='footer__right-itemLink'>INFLUENCE MUSIC</Link>
                            <Link to='/identity' className='footer__right-itemLink'>BRANDING</Link>
                            <Link to='/contacts' className='footer__right-itemLink'>КОНТАКТЫ</Link>
                        </div>
                    </div>
                    <div className='footer__right-item'>
                        <h2 className='footer__right-itemTitle'>СОЦСЕТИ</h2>
                        <div className='footer__right-itemLinks'>
                            <Link to='//vk.com/startokmedia' target='blank' className='footer__right-itemLink'>VKONTAKTE</Link>
                            <Link to='//instagram.com/startokmedia' target='blank' className='footer__right-itemLink'>INSTAGRAM*</Link>
                            <Link to='//www.facebook.com/startokmedia' target='blank' className='footer__right-itemLink'>FACEBOOK*</Link>
                            <Link to='//t.me/startokmedia_info' target='blank' className='footer__right-itemLink'>TELEGRAM</Link>
                        </div>
                    </div>
                    <div className='footer__right-item'>
                        <h2 className='footer__right-itemTitle'>КОНТАКТЫ</h2>
                        <div className='footer__right-itemLinks'>
                            <Link target='blank' className='footer__right-itemLink'>PR@STARTOKMEDIA.RU</Link>
                            <Link className='footer__right-itemLink'>WECHAT</Link>
                            <Link to='//www.linkedin.com/company/startok-media/' target='blank' className='footer__right-itemLink'>LINKEDIN</Link>
                            <Link to='//t.me/startokmedia' target='blank' className='footer__right-itemLink'>TELEGRAM</Link>
                            <Link to='//wa.me/87055338422' target='blank' className='footer__right-itemLink'>WHATSAPP*</Link>
                        </div>
                    </div>
                </div>

                <div className='footer__rightBOTTOM'>
                    <div className='footer__right-QR'>
                        <div className='footer__right-QRItem'>
                            <Link className='footer__right-QRWe QRBlock'></Link>
                            <Link className='footer__right-QRTitle'>WeChat</Link>
                        </div>
                        <div className='footer__right-QRItem'>
                            <Link className='footer__right-QRLinked QRBlock'></Link>
                            <Link className='footer__right-QRTitle'>LinkedIn</Link>
                        </div>
                        <div className='footer__right-QRItem'>
                            <Link className='footer__right-QREmail QRBlock'></Link>
                            <Link className='footer__right-QRTitle'>Email</Link>
                        </div>
                        <div className='footer__right-QRItem'>
                            <Link className='footer__right-QRWApp QRBlock'></Link>
                            <Link className='footer__right-QRTitle'>WhatsApp</Link>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
            <div className='footer__bottom'>
                    <div className='footer__bottomItem'>
                        <h2 className='footer__bottomText'>© Copyright 2023, Все права защищены</h2>
                    </div>
            </div>
        </footer>
    )
}

export default Footer