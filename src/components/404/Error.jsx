import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import './error.css'
import '../fonts/Fonts.css'

function Error () {
    return (
        <div className='errorComponent'>
            <div className='errorContainer'>
                <img className='errorLogo' src="/UI/mobileLogo.svg" alt="" />
                <img className='errorImg' src="/UI/404word.svg" alt="" />
                <Link to='/' className='errorButton'><FormattedMessage id='errorBack'/></Link>
            </div>
        </div>
    )
}

export default Error