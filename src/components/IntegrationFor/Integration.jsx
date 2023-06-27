import IntForCard from '../Cards/IntegrationCard/IntForCard'

import './integration.css'

import { integrationImg } from '../../constants/constants'

function Integration (props) {
    return (
        <div className='integrationComponent'>
            <div className='integration__container'>
                <div className='integration___content-container'>
                    <h2 className='integration__contentTitle'>
                        ИНТЕГРАЦИИ <span className='integration-gradient'>ДЛЯ</span> {props.for}
                        </h2>
                    <p className='integration__contentText small-text'>
                        {props.intTextOne}
                    </p>
                    <p className='integration__contentText'>
                        {props.intTextTwo}
                    </p>
                    <p className='integration__contentText'>
                        {props.intTextThree}
                    </p>
                </div>

                <div className='integration__cards'>
                    <IntForCard
                        img={integrationImg+props.imgOne}
                        text={props.underImgOne}
                    />
                    <hr className='centerLine' />
                    <IntForCard
                        img={integrationImg+props.imgTwo}
                        text={props.underImgTwo}
                    />
                    <hr className='centerLine' />
                    <IntForCard
                        img={integrationImg+props.imgThree}
                        text={props.underImgThree}
                    />
                </div>

                <div className='integration__connection'>
                    <p className='integration__contentText connectText'>
                        Оставьте заявку и мы свяжемся с вами в течение 1 часа.
                    </p>
                    <button className='integration__connectButton'>
                        Связаться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Integration