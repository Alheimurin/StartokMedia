import { Link } from 'react-router-dom'

import './form.css'
import '../fonts/Fonts.css'

function Form () {
    return (
        <div className="form">
            <form className='form__item' action="">
                <div className="form__left">
                    <h1 className='form__left-text'>ФОРМА <span className='form__left-textGradient'>БЫСТРОЙ</span> ОБРАТНОЙ СВЯЗИ</h1>
                    <div className='form__left-inputs'>
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">От кого</label>
                            <input className='form__left-input wLabel' type="text" placeholder='Компания' />
                        </div>
                        <input className='form__left-input' type="text" placeholder='Имя'/>
                        <input className='form__left-input' type="text" placeholder='Телефон' />
                        <div className='inputs-form'>
                            <label className='inputs-labelLeft' htmlFor="">Откуда</label>
                            <input className='form__left-input wLabel' type="text" placeholder='Email' />
                        </div>
                        <input className='form__left-input' type="text" placeholder='Комментарий' />
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
                                <button className='form__submit' type='submit'>Отправить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form