import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './form.css'
import '../fonts/Fonts.css'
/* import Confirm from '../popup/Confirm/Confirm' */


function Form (props) {

    /* const [active, setActive] = useState(false) */

    const [phoneNumber, setPhoneNumber] = useState ('')
    const [email, setEmail] = useState('')
    
    const [value, setValue] = useState({
        iniValue: 0
    })

    let validPhone = [{
        phone: '',
        mark: ''
    }]
    if (phoneNumber.length > 0) {
        validPhone = []
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

    /* const form = document.getElementById('form');

    if (form) {
        form.addEventListener('submit', formSend)
    }

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);
        console.log(formData)
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            form.reset()
        } else {
            alert('ошибка')
            e.stopPropagination()
        }
    } */

    return (
        <div className="form">
            <form className='form__item' id='form' action="">
                <div className="form__left">
                    <h1 className='form__left-text'>ФОРМА <span className='form__left-textGradient'>БЫСТРОЙ</span> ОБРАТНОЙ СВЯЗИ</h1>
                    <div className='form__left-inputs'>
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">От кого</label>
                            <input onChange={(e)=>{setValue((e.target.value))}} className='form__left-input wLabel' type="text" placeholder='Компания' />
                            <img style={value.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div style={{display: 'flex'}}>
                            <input onChange={(e)=>{setValue(e.target.value)}} className='form__left-input' type="text" placeholder='Имя'/>
                            <img style={value.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        <div className='req'>
                            <input onChange={(e)=>{setValue(e.target.value)}} className='form__left-input' onChange={(e)=>setPhoneNumber(e.target.value)} id='phone' type="text" />
                            <label className='requiredItem' htmlFor="phone">{validPhone.phone} <span style={{color:'red'}}>{validPhone.mark}</span></label>
                            <img style={value.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
                        </div>
                        
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">Откуда</label>
                            <div className='required'>
                                <input className='form__left-input wLabel' onChange={(e)=>setEmail(e.target.value)} id='email' type="text" />
                            <label className='requiredItem' htmlFor="email">{validEmail.email} <span style={{color:'red'}}>{validEmail.mark}</span></label> 
                            <img style={value.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />    
                            </div>
                                    
                        </div>
                        <div style={{display: 'flex'}}>
                            <input onChange={(e)=>{setValue(e.target.value)}} className='form__left-input' type="text" placeholder='Комментарий' />
                            <img style={value.length > 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formV.svg" alt="" /> 
                            <img style={value.length === 0 ? {display: 'block'} : {display: 'none'}} src="/UI/formX.svg" alt="" />
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
                                <button /* onClick={formSend} */ className='form__submit' type='submit'>Отправить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Confirm
            active={active}
            setActive={setActive}
            /> */}
            </form>
        </div>
    )
}

export default Form