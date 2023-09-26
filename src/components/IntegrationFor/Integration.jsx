import IntForCard from '../Cards/IntegrationCard/IntForCard'
import { integrationImg } from '../../constants/constants'

import './integration.css'

import { FormattedMessage } from 'react-intl'

function Integration ( {showModalForm, ...props}) {

    const func = (x) => {
        x = true
    }

    return (
        <div className='integrationComponent'>
            <div className='integration__container'>
                <div className='integration___content-container'>
                    <h2 className='integration__contentTitle'>
                        <FormattedMessage id='integration'/>
                        <span className='integration-gradient'>
                            <FormattedMessage id='for'/>
                            </span> 
                            {props.for}
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
                        <FormattedMessage id='connectDesc'/>
                    </p>
                    <button onClick={()=>showModalForm(func)} className='integration__connectButton'>
                        <FormattedMessage id='connectButton' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Integration