import './orderBlock.css'
import '../../fonts/Fonts.css'

import { FormattedMessage } from 'react-intl'

function OrderBlock ({ showModalForm, ...props}) {

    const func = (x) => {
        x = true
    }

    return (
        <div className='orderBlock-container'>
            <div className='orderBlock__content'>
                <p className='orderBlock__content-text'>{props.text}</p>
                <button onClick={()=>showModalForm(func)} className='orderBlock__content-button'>
                    <FormattedMessage id='order'/>
                </button>
            </div>
        </div>
    )
}

export default OrderBlock