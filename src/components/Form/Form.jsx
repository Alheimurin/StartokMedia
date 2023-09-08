import { Link } from 'react-router-dom'
import { useState } from 'react'

import './form.css'
import '../fonts/Fonts.css'
import Confirm from '../popup/Confirm/Confirm'

function Form (props) {

    const [active, setActive] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState ('')
    const [email, setEmail] = useState('')
    const [validField, setValidField] = useState({
        v: true, 
        x: true
    })

    let validPhone = [{
        phone: '',
        mark: ''
    }]
    if (phoneNumber.length > 0) {
        validPhone = []
        validField.v = false
    }
    if (phoneNumber.length === 0) {
        validPhone.phone = 'Телефон'
        validPhone.mark = '*'
    }

    let validEmail = [{
        email: '',
        mark: ''
    }]
    if (email.length > 0) {
        validEmail = []
    }
    if (email.length === 0) {
        validEmail.email = 'Email'
        validEmail.mark = '*'
    }

    


    return (
        <div className="form">
            <form className='form__item' action="">
                <div className="form__left">
                    <h1 className='form__left-text'>ФОРМА <span className='form__left-textGradient'>БЫСТРОЙ</span> ОБРАТНОЙ СВЯЗИ</h1>
                    <div className='form__left-inputs'>
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">От кого</label>
                            <input className='form__left-input wLabel' type="text" placeholder='Компания' />
                            <img style={validField.v ? {display: 'none'} : {display: 'block'}} src="/UI/formV.svg" alt="" /> <img style={validField.x ? {display: 'none'} : {display: 'block'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div style={{display: 'flex'}}>
                            <input className='form__left-input' type="text" placeholder='Имя'/>
                            <img style={validField.v ? {display: 'none'} : {display: 'block'}} src="/UI/formV.svg" alt="" /> <img style={validField.x ? {display: 'none'} : {display: 'block'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div className='req'>
                            <input className='form__left-input' onChange={(e)=>setPhoneNumber(e.target.value)} id='phone' type="text" />
                            <label className='requiredItem' htmlFor="phone">{validPhone.phone} <span style={{color:'red'}}>{validPhone.mark}</span></label>
                            <img style={validField.v ? {display: 'none'} : {display: 'block'}} src="/UI/formV.svg" alt="" /> <img style={validField.x ? {display: 'none'} : {display: 'block'}} src="/UI/formX.svg" alt="" />
                        </div>
                        
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">Откуда</label>
                            <div className='required'>
                                <input className='form__left-input wLabel' onChange={(e)=>setEmail(e.target.value)} id='email' type="text" />
                            <label className='requiredItem' htmlFor="email">{validEmail.email} <span style={{color:'red'}}>{validEmail.mark}</span></label> 
                            <img style={validField.v ? {display: 'none'} : {display: 'block'}} src="/UI/formV.svg" alt="" /> <img style={validField.x ? {display: 'none'} : {display: 'block'}} src="/UI/formX.svg" alt="" />    
                            </div>
                                    
                        </div>
                        <div style={{display: 'flex'}}>
                            <input className='form__left-input' type="text" placeholder='Комментарий' />
                            <img style={validField.v ? {display: 'none'} : {display: 'block'}} src="/UI/formV.svg" alt="" /> <img style={validField.x ? {display: 'none'} : {display: 'block'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div className='form__left-inputCheckbox'>
                            <input className='form__left-inputCheck' type="checkbox" defaultChecked />
                            <label className='label-checkbox' htmlFor="">Нажимая кнопку «Отправить», вы принимаете правила <Link className='label-policy'>политики конфиденциальности</Link></label>
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
                                <label className='inputs-labelRight' htmlFor="">Кому</label>
                                <input className='form__right-input' type="text" value='STARTOK MEDIA' disabled/>
                            </div>
                            <div className='inputs-form'>
                                <label className='inputs-labelRight' htmlFor="">Куда</label>
                                <input className='form__right-input' type="text" value='PR@STARTOKMEDIA.RU' disabled />
                            </div>
                        </div>

                        <div className='form__right-upSub'>

                            <div className='form__left-inputCheckbox mobile_checkbox'>
                                <input className='form__left-inputCheck' type="checkbox" defaultChecked />
                                <label className='label-checkbox' htmlFor="">Нажимая кнопку «Отправить», вы принимаете правила <Link className='label-policy'>политики конфиденциальности</Link></label>
                            </div>

                            <div>
                                <button type='button' className='form__right__buttonUpload'>
                                    <label className='upload' htmlFor='upload'>
                                        <svg className='button-clip'/>
                                        Прикрепить файл
                                    </label>
                                </button>
                                <input id='upload' type="file" multiple accept="image/jpeg,image/png" style={{display: 'none'}}/>
                            </div>
                            
                            <div>
                                <button onClick={(e)=>{setActive(true)}} className='form__submit' type='submit'>Отправить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Confirm
            active={active}
            setActive={setActive}
            />
            </form>
        </div>
    )
}

export default Form