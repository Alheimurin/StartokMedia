import './subBranding.css'
import '../fonts/Fonts.css'

function SubBranding (props) {
    return (
        <div className='subBranding-component'>
            <div className='subBranding-container'>
                <div>
                    <div className='subBranding-content'>
                        <div className='subBranding-img'>
                            <div>
                                <img src={props.img} alt="" />
                            </div>
                        </div>
                        <h2 className='subBranding-title'>{props.title}</h2>
                        <p className='subBranding-text'>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBranding