import './formPopUp.css'
import '../../fonts/Fonts.css'

import { FormattedMessage, injectIntl } from 'react-intl'

import { Link } from 'react-router-dom'

function FormPopUp ({active, setActive, intl}) {

    return (
        <div className={active ? 'modalForm active': 'modalForm'} onClick={()=> setActive(false)}>
            <div className='formPopUpComponent' onClick={e=>e.stopPropagation()}>
                <form className='formPopUp__Container' action="https://formspree.io/f/mbjvzbeg" method="POST">
                    <div className='formPopUp__Logo'>
                        <div className='formPopUp__LogoContainer'>
                            <img className='formPopUp__img' src="/UI/formPUpLogo.svg" alt="" />
                            <h2 className='formPopUp__Title'>STARTOK MEDIA</h2>
                        </div>
                        <img onClick={()=>setActive(false)} className='formPopUp__cancel' src="/UI/QRxross.svg" alt="" />
                    </div>
                    <div>
                        <p className='formPopUp__Text'>
                            <FormattedMessage id='formDesc'/>
                        </p>
                    </div>
                    <div className='formPopUp__inputsBox'>
                        <div className='formPopUp__inputs'>
                            <input className='formPopUp__input' name='Имя' type="text" placeholder={intl.formatMessage({id:'name'})}/>
                            <input className='formPopUp__input' name='Телефон' type="number" placeholder={intl.formatMessage({id:'phone'})} required/>
                        </div>
                        <div className='formPopUp__inputs'>
                            <input className='formPopUp__input' name='Email' type="text" placeholder={intl.formatMessage({id: 'emailPlaceholder'})} required/>
                            <input className='formPopUp__input' name='Компания' type="text" placeholder={intl.formatMessage({id:'fromPlaceholder'})} />
                        </div>
                        <input className='formPopUp__inputBottom' name='Комментарий' type="text" placeholder={intl.formatMessage({id: 'additional'})} />
                        <div className='formPopUp__inputChecbox'>
                            <input className='formPopUp__inputChecboxItem' name='Политика принята' type="checkbox" defaultChecked required/>  
                            <label className='formPopUp__Text' htmlFor="">
                                <FormattedMessage id='formPolicy'/>
                                <Link target='blank' to='https://drive.google.com/file/d/1ytQyOG2bAIXH9vFNwc4rPmYO0cQWs3lr/view?pli=1' className='formPopUpPolicy'>
                                    <FormattedMessage id='formPolicyEnd'/>
                                </Link>
                            </label>
                        </div>
                    </div>
                    <div className='formPopUp__buttons'>
                        <div>
                            <button type='button' className='formPopUp__buttonsUpload formPopUpBtn'>
                                <label className='formPopUp__buttonsUploadContent' htmlFor="formPopUpUpload">
                                    <img src="/UI/clip.svg" alt="" />
                                    <FormattedMessage id='attach'/>
                                </label>
                                <input id='formPopUpUpload' type="file"  style={{display: 'none'}}/>
                            </button>
                        </div>
                        <button className='formPopUp__buttonsSubmit formPopUpBtn' type='submit'><FormattedMessage id='formSubmit'/></button>
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default injectIntl(FormPopUp)