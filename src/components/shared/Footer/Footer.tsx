import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import './Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <section className='footer-section'>
            <div className="items-bx">
                <div className="item">
                    <img className='footer-logo' src={IMAGES.coloredLogo} alt='pic' />

                    <div className="list">
                        <div className="list-item">
                            <img src={IMAGES.footerocation} alt='pic' />
                            25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
                        </div>
                        <div className="list-item">
                            <img src={IMAGES.footerCall} alt='pic' />
                            +603 4784 273 12
                        </div>
                        <div className="list-item">
                            <img src={IMAGES.footerSms} alt='pic' />
                            rentcars@gmail.com
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="title">{t('our_product')}</div>

                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('career')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('car')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('packages')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('features')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('priceline')}</Link>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="title">{t('resources')}</div>

                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('download')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('guides')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('partner_network')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('cruises')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('developer')}</Link>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="title">{t('about_rentcars')}</div>

                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('why_choose_us')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('our_story')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('investor_relations')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('press_center')}</Link>
                        </div>
                    </div>
                    <div className="list">
                        <div className='list-item'>
                            <Link to='/'>{t('advertise')}</Link>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="title">{t('follow_us')}</div>

                    <div className="list">
                        <div className="list-item">
                            <Link to='/'><img src={IMAGES.footerFacebook} alt='pic' /></Link>
                            <Link to='/'><img src={IMAGES.footerInstagram} alt='pic' /></Link>
                            <Link to='/'><img src={IMAGES.footerYoutube} alt='pic' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bootom-footer">{t('copyright')}</div>
        </section>
    )
}

export default Footer