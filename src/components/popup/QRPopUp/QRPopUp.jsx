import './qrpopup.css'
import '../../fonts/Fonts.css'


function QRPopUp({active, setActive}, props) {
    return (
        <div className={active ? 'QRmodal QRactive' : 'QRmodal'} onClick={()=>setActive(false)}>
            <div className='QRmodal__container' onClick={(e)=>e.stopPropagation()}>
                <div className='QRmodal__container-left'>
                    <img className='QRmodal__container-left_QR' src={"/UX/"+props.img} alt="" />
                </div>
                <div className='QRmodal__container-right'>
                    <div className='QRmodal__container-right_desc'>
                        <div className='QRmodal__container-right_descContainer'>
                            <h3 className='QRmodal__container-right_descTitle'>ОТСКАНИРУЙТЕ <span className='QRgradient'>QR</span>-CODE <span className='QRName'>{props.name}</span> </h3>
                            <p className='QRmodal__container-right_descText'>Наведите камеру телефона</p>
                        </div>
                    </div>
                    <div className='QRmodal__container-cancel'>
                        <button className='QRmodal__container-cancel_button' onClick={()=>setActive(false)}>
                            <img src="/UI/QRxross.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRPopUp