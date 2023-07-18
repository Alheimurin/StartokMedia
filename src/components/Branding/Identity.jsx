import NavBar from '../NavBar/NavBar'
import GradientCard from '../Cards/GradientCard/Card'
import OrderBlock from '../Orders/OrderBlock/OrderBlock'
import SubBranding from '../SubItems/SubBranding'
import OtherServices from '../OtherServices/OtherServices'
import RequestBlackWords from '../Tickers/RequestBlackWords/BlackWords'
import From from '../Form/Form'
import Footer from '../Footer/Footer'
import FormPopUp from '../popup/FormPopUp/FormPopUp'

import './identity.css'
import '../fonts/Fonts.css'

import { useState } from 'react'

function Identity () {

    const [formShow, setFormShow] = useState(false)

    const showModalForm = () => {
        setFormShow(true)
    }

    return (
        <div>
            <header className='identity__header'>
                <div className='identityNav'>
                    <NavBar showModalForm={showModalForm}
                    identity={true}
                    />
                </div>

                <div className='identity__header-container'>
                    <div className='identity__header-content'>
                        <div>
                            <h2 className='identity__header-title'>Branding, websites</h2>
                            <p className='identity__header-text'>IDENTITY & UX/UI-DESIGN</p>
                        </div>

                        <div className='identity__header-card'>
                            <GradientCard
                                title='BRANDING'
                                text='Design & Development'
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className='identity__style'>
                    <div className='identity__content'>
                        <h2 className='identity-title'>РАЗРАБОТКА <span className='identity-gradient'> ФИРМЕННОГО </span> СТИЛЯ</h2>
                        <div className='identity-container'>
                            <div className='identity__style-left'>
                                <img src="UI/identityStyle.svg" alt="" />
                            </div>
                            <div className='identity__style-right'>
                                <div className='identity__style-Text'>
                                    <p className='identity-text'>
                                        Айдентика включает в себя комплекс работ по визуальному преображению компании. 
                                        Фирменный стиль позволяет не только выделяться на фоне большой конкуренции, 
                                        но и управлять вниманием клиентов.</p>
                                    <p className='identity-text'>
                                        В процессе разработки айдентики погружаемся в бизнес, 
                                        исследуем и анализируем нужную аудиторию и конкурентов, 
                                        отталкиваемся от идеологии компании и создаем образ,
                                        который поможет решить ваши маркетинговые задачи.
                                    </p>
                                </div>
                                <div className='identity__style-rightButton'>
                                    <OrderBlock
                                        text='Создадим дизайн, который выделит вашу компанию.'
                                        showModalForm={showModalForm}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='identity__dev'>
                    <div className='identity__dev-container'>
                        <div>
                            <h2 className='identity-title'><span className='identity-gradient'>UX/UI-ДИЗАЙН </span>И WEB-РАЗРАБОТКА</h2>
                            <div className='identity__style-Text dev-text'>
                                <p className='identity-text'>
                                    Хорошо спроектированный сайт позволит повысить важные метрики: 
                                    глубину просмотра, время на сайте и конверсию.</p>
                                <p className='identity-text'>
                                    При разработке сайта над проектом будет работать команда специалистов минимум из четырех человек: 
                                    UX/UI-дизайнер, маркетолог, frontend и backend-разработчики.
                                </p>
                            </div>
                            <div className='identity__dev-button'>
                                <OrderBlock
                                    text='Разработаем сайт, который будет отвечать необходимым требованиям. '
                                    showModalForm={showModalForm}
                                />
                            </div>
                        </div>
                        
                        <div className='identity__dev-img'>
                            <img className='dev-imgOne' src="UI/identityDev2.svg" alt="" />
                            <img className='dev-imgTwo' src="UI/identityDev.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='identity__dev-sub'>
                    <SubBranding
                        img='UI/devShure.svg'
                        title='UX/UI-ДИЗАЙН'
                        text='Отталкиваясь от айдентики компании, пользовательского опыта и 
                        удобства использования первично проецируется архитектура сайта, 
                        а затем происходит прототипирование и дизайн.'
                    />
                    <hr />
                    <SubBranding
                        img='UI/devStar.svg'
                        title='WEB-РАЗРАБОТКА'
                        text='Даже самая сложная идея не останется без реализации, 
                        наша команда IT-специалистов реализует верстку любой сложности.'
                    />
                </div>

                <div>
                    <OtherServices
                        leftTitle='INFLUENCE BRAND'
                        leftText='Направление influence для брендов решает важную задачу доверия целевой аудитории. 
                        Правильная стратегия и промо-план позволит не только расположить людей к бренду, 
                        но и охватить их максимальное количество.'
                        leftLink='/company'
                        rightTitle='INFLUENCE MUSIC'
                        rightText='При правильном подходе к тестированию и аналитике можно создать вирусную повторяющую механику, 
                        а также получить максимально быстрый и эффективный результат упоминаний на других площадках, 
                        что прямо пропорционально влияет на стриминг.'
                        rightLink='/music'
                    />
                </div>

                <div>
                    <RequestBlackWords/>
                </div>
                
                <div>
                    <From/>
                </div>
            </main>

            <footer>
                <div>
                    <Footer/>
                </div>
            </footer>
            <FormPopUp
                active={formShow}
                setActive={setFormShow}
            />
        </div>
    )
}

export default Identity