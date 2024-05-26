import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IMAGES from './../../../../assets/images/images';
import Header from "../../../shared/Header/Header";
import './BannerSection.scss';

const BannerSection = () => {

    const { t } = useTranslation();

    return (
        <section className='banner-section'>
            <Header />

            <div className="content-bx">
                <div className="text">
                    <h1>
                        {t('home_banner_h1_1')} <br />
                        {t('home_banner_h1_2')} <span className="easly">{t('easily')}</span>
                    </h1>
                    <p>
                        {t('home_banner_p_1')} <br />
                        {t('home_banner_p_2')}
                    </p>
                    <div className="store-icons">
                        <Link to='/'><img src={IMAGES.playStore} alt='pic' /></Link>
                        <Link to='/'><img src={IMAGES.appStore} alt='pic' /></Link>
                    </div>
                </div>

                <div className="car-img">
                    <img src={IMAGES.CarBanner} alt='pic' />
                </div>
            </div>
        </section>
    )
}

export default BannerSection