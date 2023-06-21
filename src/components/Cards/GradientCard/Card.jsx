import '../../fonts/Fonts.css'

import './card.css'


function Card (props) {
    return (
        <div className='card__container'>

            <div className='card__img-container'>
                <svg className='card__img'></svg>
            </div>

            <div className='card__content'>
                <h2 className='card__title'>{props.title}</h2>
                <p className='card__text'>{props.text}</p>
            </div>

        </div>
    )
}

export default Card