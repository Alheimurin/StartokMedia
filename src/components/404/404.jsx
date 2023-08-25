import { Link } from 'react-router-dom'

import './404.css'
import '../fonts/Fonts.css'

function Error () {
    return (
        <div className='errorComponent'>
            <div className='errorContainer'>
                <img className='errorImg' src="/UI/404word.svg" alt="" />
                <Link to='/' className='errorButton'>На главную</Link>
            </div>
        </div>
    )
}

export default Error