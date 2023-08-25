import './confirm.css'
import '../../fonts/Fonts.css'

function Confirm ({active, setActive}) {
    return (
        <div className={active ? 'confirm' : 'confirmActive'}>
            <div className='confirm__container'>
                <div className='confirm__content'>
                    <img src="/UI/v.svg" alt="" />
                    <div>
                        <h3 className='confirm__title'>Спасибо!</h3>
                        <p className='confirm__text'>В скором времени мы свяжемся с вами!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm