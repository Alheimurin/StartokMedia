import './formPopUpMobile.css'
import '../../fonts/Fonts.css'

import { FormattedMessage, injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'

function ModalFormMobile ({MobileForm, setMobileForm, intl}) {

    return (
        <div className={ MobileForm ? 'modalFormMobile__component modalFormMobileActive' : 'modalFormMobile__component'}>
            <div className='modalFormMobile'>
                <div className='modalFormMobile__img'>
                    <button onClick={()=>setMobileForm(false)} className='cancelButton'/>
                </div>
                <div className='modalFormMobile__container'>
                    <div className='modalFormMobile__title'>
                        <h3 className='modalFormMobile__titleItem'>
                            <FormattedMessage id='formTitle'/> 
                            <span className='mobileGradient'>
                                <FormattedMessage id='formQuick'/>
                            </span> 
                            <FormattedMessage id='formTitleEnd'/>
                        </h3>
                    </div>
                    <form className='modalFormMobile__form' action="https://formspree.io/f/mbjvzbeg" method="POST">
                        <label className='modaFormMobile__label' htmlFor="">
                            <FormattedMessage id='from'/>
                            <input className='modalFormMobile__input mobileLabel' name='Компания' placeholder={intl.formatMessage({id: 'fromPlaceholder'})} type="text" />
                        </label>
                        <input className='modalFormMobile__input' name='Имя' placeholder={intl.formatMessage({id: 'name'})} type="text" />
                        <input className='modalFormMobile__input' name='Телефон' placeholder={intl.formatMessage({id: 'phone'})} type="number" required/>
                        <label className='modaFormMobile__label' htmlFor="">
                            <FormattedMessage id='email'/>
                            <input className='modalFormMobile__input mobileLabel' name='Email' placeholder={intl.formatMessage({id: 'emailPlaceholder'})} type="text" required />
                        </label>
                        <input className='modalFormMobile__input' name='Комментарий' placeholder={intl.formatMessage({id: 'additional'})} type="text" />
                        <label className='modaFormMobile__label' htmlFor="">
                            <FormattedMessage id='to'/>
                            <input readOnly value='STARTOK MEDIA' name='Кому' className='modalFormMobile__input mobileLabel inputTo ' type="text" />
                        </label>
                        <label className='modaFormMobile__label' htmlFor="">
                            <FormattedMessage id='where'/>
                            <input readOnly value='PR@STARTOKMEDIA.RU' name='На почту' className='modalFormMobile__input mobileLabel inputTo' type="text" />
                        </label>
                        <label className='modaFormMobile__label checkbox' htmlFor="">
                            <input type="checkbox" name='Политика принята' defaultChecked required/>
                            <p>
                                <FormattedMessage id='formPolicy'/> 
                                <Link target='blank' to='https://drive.google.com/file/d/1ytQyOG2bAIXH9vFNwc4rPmYO0cQWs3lr/view?pli=1' className='label-policy'>
                                    <FormattedMessage id='formPolicyEnd'/>
                                </Link>
                            </p>
                        </label>
                        <button type='button' className='modalFormMobile__loader'>
                            <label className='loader__button' htmlFor="modalLoadMoblie">
                                <img src="UI/clip.svg" alt="" />
                                <FormattedMessage id='attach'/>
                            </label>
                                <input id='modalLoadMoblie' type="file" style={{display: 'none'}} />
                        </button>
                        <button className='modalFormMobile__button' type='submit'><FormattedMessage id='formSubmit'/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default injectIntl(ModalFormMobile)