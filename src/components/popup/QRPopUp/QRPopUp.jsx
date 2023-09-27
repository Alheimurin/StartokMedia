import './qrpopup.css'
import '../../fonts/Fonts.css'

import { FormattedMessage } from 'react-intl'

function QRPopUp({active, setActive, name, img}) {
    return (
        <div className={active ? 'QRmodal QRactive' : 'QRmodal'} onClick={()=>setActive(false)}>
            <div className='QRmodal__container' onClick={(e)=>e.stopPropagation()}>
                <div className='QRmodal__container-left'>
                    <img className='QRmodal__container-left_QR' src={"/UX/"+img} alt="" />
                </div>
                <div className='QRmodal__container-right'>
                    <div className='QRmodal__container-right_desc'>
                        <div className='QRmodal__container-right_descContainer'>
                            <h3 className='QRmodal__container-right_descTitle'>
                                <span className='qrTitle'>
                                    <FormattedMessage id='qrTitle'/> 
                                </span>
                                <span className='QRgradient'>
                                    <FormattedMessage id='qrColor'/>
                                </span><FormattedMessage id='qrTitleEnd'/>
                                <span className='QRName'>
                                    {name}
                                </span> 
                            </h3>
                            <p className='QRmodal__container-right_descText'><FormattedMessage id='qrDesc'/></p>
                        </div>
                    </div>
                    <div className='QRmodal__container-cancel'>
                        <button className='QRmodal__container-cancel_button' onClick={()=>setActive(false)}>
                            <img src="/UI/QRxross.svg" alt="" />
                        </button>
                    </div>
                </div>
                <button onClick={(e)=>setActive(false)} className='mobile__close'>Закрыть</button>
            </div>
        </div>
    )
}

export default QRPopUp