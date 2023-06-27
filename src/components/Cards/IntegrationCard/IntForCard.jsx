import './intForCard.css'

function IntForCard (props) {
    return (
        <div className='integration__content-wImg'>
            <div className='imgContainer'>
                <div className='integration__contentImg'>
                    <div>
                        <img className='integration__img' src={props.img} alt=''></img>
                    </div>
                </div>
                <p className='integration__contentImgText'>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default IntForCard