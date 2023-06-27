import './orderBlock.css'
import '../../fonts/Fonts.css'

function OrderBlock (props) {
    return (
        <div className='orderBlock-container'>
            <div className='orderBlock__content'>
                <p className='orderBlock__content-text'>{props.text}</p>
                <button className='orderBlock__content-button'>Заказать</button>
            </div>
        </div>
    )
}

export default OrderBlock