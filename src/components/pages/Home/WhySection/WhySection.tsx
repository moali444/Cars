import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import './WhySection.scss';

const WhySection = () => {

    const { t } = useTranslation();

    return (
        <section className='why-section'>
            <div className="why-content-bx">
                <div className="img-holder">
                    <img src={IMAGES.audiCar} alt='pic' />
                </div>

                <div className="text-bx">
                    <div className="section-header align-items-start">
                        <div className="title">{t('why_header_title')}</div>
                        <div className="text">
                            <h3>{t('why_header_text_1')} {t('why_header_text_2')}</h3>
                        </div>
                    </div>

                    <div className="items-list">
                        <div className="item">
                            <div className="icon-bx">
                                <img src={IMAGES.wallet} alt='pic' />
                            </div>
                            <div className="text">
                                <h4>{t('list_item_1_title')}</h4>
                                <p>{t('list_item_1_p_1')}<br/>{t('list_item_1_p_2')}</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon-bx">
                                <img src={IMAGES.userTick} alt='pic' />
                            </div>
                            <div className="text">
                                <h4>{t('list_item_2_title')}</h4>
                                <p>{t('list_item_2_p_1')}<br/>{t('list_item_2_p_2')}</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon-bx">
                                <img src={IMAGES.Support24} alt='pic' />
                            </div>
                            <div className="text">
                                <h4>{t('list_item_3_title')}</h4>
                                <p>{t('list_item_3_p_1')}<br/>{t('list_item_3_p_2')}</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon-bx">
                                <img src={IMAGES.messages2} alt='pic' />
                            </div>
                            <div className="text">
                                <h4>{t('list_item_4_title')}</h4>
                                <p>{t('list_item_4_p_1')}<br/>{t('list_item_4_p_2')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhySection