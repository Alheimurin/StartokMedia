import './formPopUp.css'
import '../../fonts/Fonts.css'

function FormPopUp ({active, setActive}) {
    return (
        <div className={active ? 'modalForm active': 'modalForm'} onClick={()=> setActive(false)}>
            <div className='formPopUpComponent' onClick={e=>e.stopPropagation()}>
                <form className='formPopUp__Container'>
                    <div className='formPopUp__Logo'>
                        <img src="/UI/formPUpLogo.svg" alt="" />
                        <h2 className='formPopUp__Title'>STARTOK MEDIA</h2>
                    </div>
                    <div>
                        <p className='formPopUp__Text'>Заполните форму, чтобы мы могли связаться с вами</p>
                    </div>
                    <div className='formPopUp__inputsBox'>
                        <div className='formPopUp__inputs'>
                            <input className='formPopUp__input' type="text" placeholder='Имя' />
                            <input className='formPopUp__input' type="text" placeholder='Телефон' />
                        </div>
                        <div className='formPopUp__inputs'>
                            <input className='formPopUp__input' type="text" placeholder='Email' />
                            <input className='formPopUp__input' type="text" placeholder='Название компании' />
                        </div>
                        <input className='formPopUp__inputBottom' type="text" placeholder='Комментарий' />
                        <div className='formPopUp__inputChecbox'>
                            <input className='formPopUp__inputChecboxItem' type="checkbox" checked />  
                            <label className='formPopUp__Text' htmlFor="">Нажимая кнопку «Отправить», вы принимаете правила политики конфиденциальности</label>
                        </div>
                    </div>
                    <div className='formPopUp__buttons'>
                        <div>
                            <button type='button' className='formPopUp__buttonsUpload formPopUpBtn'>
                                <label className='formPopUp__buttonsUploadContent' htmlFor="formPopUpUpload">
                                    <img src="/UI/clip.svg" alt="" />
                                    Прикрепить файл 
                                </label>
                                <input id='formPopUpUpload' type="file"  style={{display: 'none'}}/>
                            </button>
                        </div>
                        <button className='formPopUp__buttonsSubmit formPopUpBtn' type='submit'>Отправить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default FormPopUp