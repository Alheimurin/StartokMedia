import './formPopUpMobile.css'
import '../../fonts/Fonts.css'

function ModalFormMobile ({MobileForm, setMobileForm}) {
    return (
        <div className={ MobileForm ? 'modalFormMobile__component modalFormMobileActive' : 'modalFormMobile__component'}>
            <div className='modalFormMobile'>
                <div className='modalFormMobile__img'>
                    <button onClick={()=>setMobileForm(false)} className='cancelButton'/>
                </div>
                <div className='modalFormMobile__container'>
                    <div className='modalFormMobile__title'>
                        <h3 className='modalFormMobile__titleItem'>
                            ФОРМА <span className='mobileGradient'>БЫСТРОЙ</span> ОБРАТНОЙ СВЯЗИ
                        </h3>
                    </div>
                    <form className='modalFormMobile__form'>
                        <label className='modaFormMobile__label' htmlFor="">
                            От кого
                            <input className='modalFormMobile__input mobileLabel' placeholder='Компания' type="text" />
                        </label>
                        <input className='modalFormMobile__input' placeholder='Имя' type="text" />
                        <input className='modalFormMobile__input' placeholder='Телефон' type="text" />
                        <label className='modaFormMobile__label' htmlFor="">
                            Откуда
                            <input className='modalFormMobile__input mobileLabel' placeholder='Email' type="text" />
                        </label>
                        <input className='modalFormMobile__input' placeholder='Комментарий' type="text" />
                        <label className='modaFormMobile__label' htmlFor="">
                            Кому
                            <input readOnly value='STARTOK MEDIA' className='modalFormMobile__input mobileLabel inputTo ' type="text" />
                        </label>
                        <label className='modaFormMobile__label' htmlFor="">
                            Куда
                            <input readOnly value='PR@STARTOKMEDIA.RU' className='modalFormMobile__input mobileLabel inputTo' type="text" />
                        </label>
                        <label className='modaFormMobile__label checkbox' htmlFor="">
                            <input type="checkbox" />
                            Нажимая кнопку «Отправить», вы принимаете правила политики конфиденциальности
                        </label>
                        <button type='button' className='modalFormMobile__loader'>
                            <label className='loader__button' htmlFor="modalLoadMoblie">
                                <img src="UI/clip.svg" alt="" />
                                Прикрепить файл
                            </label>
                                <input id='modalLoadMoblie' type="file" style={{display: 'none'}} />
                        </button>
                        <button className='modalFormMobile__button' type='submit'>Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalFormMobile