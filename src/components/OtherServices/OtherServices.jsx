import { Link } from 'react-router-dom'

import './otherServices.css'

function OtherServices (props) {
    return (
        <div className='otherServicesComponent'>

                <div className='otherServices__container'>
                    <h2 className='otherServices__title'>ДРУГИЕ УСЛУГИ</h2>
                    <div className='otherServices__content-container'>
                        <div className='otherServices__content'>
                            <h3 className='otherServices__contentTitle'>{props.leftTitle}</h3>
                            <p className='otherServices__contentText'>{props.leftText}</p>
                            <Link to={props.leftLink} className='otherServices__contentLink'>Подробнее</Link>
                        </div>

                        <div className='otherServices__content'>
                            <h3 className='otherServices__contentTitle'>{props.rightTitle}</h3>
                            <p className='otherServices__contentText'>{props.rightText}</p>
                            <Link to={props.rightLink} className='otherServices__contentLink'>Подробнее</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default OtherServices