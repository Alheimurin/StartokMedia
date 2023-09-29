import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import './form.css'
import '../fonts/Fonts.css'



function Form (props) {

    const inputRef = useRef(null)
    
    const uploadFile = () => {
        const files = inputRef.current.files 
        console.log(files)
    }

    const { intl } = props

    const [value, setValue] = useState({
        company: 0,
        name: 0,
        phone: 0,
        mail: 0,
        comment: 0,
    })

    let validPhone = {
        phone: <FormattedMessage id='phone'/>,
        mark: '*'
    }
    if (value.phone.length > 0) {
        validPhone = []
    }
    if (value.phone.length === 0) {
        validPhone.phone = <FormattedMessage id='phone'/>
        validPhone.mark = '*'
    }

    let validEmail = {
        email: 'Email',
        mark: '*'
    }
    if (value.mail.length > 0) {
        validEmail = []
    }
    if (value.mail.length === 0) {
        validEmail.email = <FormattedMessage id='emailPlaceholder'/>
        validEmail.mark = '*'
    }

    
    return (
        <div className="form">
            <form className='form__item' id='form' action="https://formspree.io/f/mbjvzbeg" method="POST">
                <div className="form__left">
                    <h1 className='form__left-text'>
                        <FormattedMessage id='formTitle'/> 
                        <span className='form__left-textGradient'>
                            <FormattedMessage id='formQuick'/>
                        </span> 
                        <FormattedMessage id='formTitleEnd'/>
                    </h1>
                    <div className='form__left-inputs'>
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">
                                <FormattedMessage id='from'/>
                            </label>
                            <div className='required'>
                                <input onChange={(e)=>{setValue({...value, company: e.target.value})}} className='form__left-input wLabel' name='Компания' type="text" placeholder={intl.formatMessage({id: 'fromPlaceholder'})} />
                                <img style={value.company.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                                <img style={value.company.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                            </div>
                        </div>
                        <div className='required'>
                            <input onChange={(e)=>{setValue({...value, name: e.target.value})}} className='form__left-input' name='Имя' type="text" placeholder={intl.formatMessage({id: 'name'})}/>
                            <img style={value.name.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.name.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div className='required'>
                            <input onChange={(e)=>setValue({...value, phone: e.target.value})} className='form__left-input' name='Телефон' id='phone' type="text" />
                            <label className='requiredItem' htmlFor="phone">{validPhone.phone} <span style={{color:'red'}}>{validPhone.mark}</span></label>
                            <img style={value.phone.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.phone.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">
                                <FormattedMessage id='email'/>
                            </label>
                            <div className='required'>
                            <input onChange={(e)=>setValue({...value, mail: e.target.value})} className='form__left-input wLabel' name='Email' id='email' type="text" />
                            <label className='requiredItem' htmlFor="email">{validEmail.email} <span style={{color:'red'}}>{validEmail.mark}</span></label> 
                            <img style={value.mail.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.mail.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />  
                            </div>
                                    
                        </div>
                        <div className='required'>
                            <input onChange={(e)=>{setValue({...value, comment: e.target.value})}} className='form__left-input' type="text" name='Комментарий' placeholder={intl.formatMessage({id: 'additional'})} />
                            <img style={value.comment.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.comment.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div className='form__left-inputCheckbox'>
                            <input className='form__left-inputCheck' type="checkbox" defaultChecked required/>
                            <label className='label-checkbox' htmlFor="">
                                <FormattedMessage id='formPolicy'/> 
                                <Link className='label-policy'>
                                    <FormattedMessage id='formPolicyEnd'/>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form__right">
                    <div className='form__right-container'>
                        <div className='form__right-img'>
                            <svg className='form__right-imgItem' />
                        </div>

                        <div className='input__right-to'>
                            <div className='inputs-form'>
                                <label className='inputs-labelRight' htmlFor="">
                                    <FormattedMessage id='to'/>
                                </label>
                                <input className='form__right-input' name='Кому' type="text" value='STARTOK MEDIA' disabled/>
                            </div>
                            <div className='inputs-form'>
                                <label className='inputs-labelRight' htmlFor="">
                                    <FormattedMessage id='where'/>
                                </label>
                                <input className='form__right-input' name='На почту' type="text" value='PR@STARTOKMEDIA.RU' disabled />
                            </div>
                        </div>

                        <div className='form__right-upSub'>

                            <div className='form__left-inputCheckbox mobile_checkbox'>
                                <input className='form__left-inputCheck' type="checkbox" defaultChecked />
                                <label className='label-checkbox' htmlFor="">
                                    <FormattedMessage id='formPolicy'/>
                                    <Link className='label-policy'>
                                        <FormattedMessage id='formPolicyEnd'/>
                                    </Link>
                                </label>
                            </div>

                            <div>
                                <label onChange={uploadFile} useref={inputRef} className='upload' htmlFor='upload'>
                                    <svg className='button-clip'/>
                                    <FormattedMessage id='attach'/>
                                </label>
                                <input  id='upload' type="file" multiple accept="image/jpeg,image/png" style={{display: 'none'}}/>
                            </div>
                            
                            <div>
                                <button className='form__submit' type='submit'>
                                    <FormattedMessage id='formSubmit'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default injectIntl(Form)