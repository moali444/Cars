import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import './TestimonialsSection.scss';

const TestimonialsSection = () => {

    const { t } = useTranslation();

    return (
        <section className="testimonials-section">
            <div className="section-header">
                <div className="title">{t('testimonials_header_title')}</div>
                <div className="text">
                    <h3>{t('testimonials_header_text')}</h3>
                </div>
            </div>

            <Swiper
                spaceBetween={10}
                //slidesPerView={3}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className='testimonials-slider'
                breakpoints={{                    
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="testimonial-item">
                        <div className="item-img">
                            <img src={IMAGES.user1} alt='pic' />
                        </div>

                        <div className="item-text">
                            <div className="top-header">
                                <span className="num">5.0</span>
                                <span className="text">{t('stars')}</span>
                            </div>
                            <div className="stars-bx">
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                            </div>
                            <div className="testimonial-text">{t('testimonial_text')}</div>
                            <div className="user-info">
                                <div className="name">Charlie Johnson</div>
                                <div className="location">{t('user_location')}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-item">
                        <div className="item-img">
                            <img src={IMAGES.user2} alt='pic' />
                        </div>

                        <div className="item-text">
                            <div className="top-header">
                                <span className="num">5.0</span>
                                <span className="text">{t('stars')}</span>
                            </div>
                            <div className="stars-bx">
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                            </div>
                            <div className="testimonial-text">{t('testimonial_text')}</div>
                            <div className="user-info">
                                <div className="name">Charlie Johnson</div>
                                <div className="location">{t('user_location')}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-item">
                        <div className="item-img">
                            <img src={IMAGES.user3} alt='pic' />
                        </div>

                        <div className="item-text">
                            <div className="top-header">
                                <span className="num">5.0</span>
                                <span className="text">{t('stars')}</span>
                            </div>
                            <div className="stars-bx">
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                            </div>
                            <div className="testimonial-text">{t('testimonial_text')}</div>
                            <div className="user-info">
                                <div className="name">Charlie Johnson</div>
                                <div className="location">{t('user_location')}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-item">
                        <div className="item-img">
                            <img src={IMAGES.user4} alt='pic' />
                        </div>

                        <div className="item-text">
                            <div className="top-header">
                                <span className="num">5.0</span>
                                <span className="text">{t('stars')}</span>
                            </div>
                            <div className="stars-bx">
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                                <img src={IMAGES.GoldStar} alt='pic' />
                            </div>
                            <div className="testimonial-text">{t('testimonial_text')}</div>
                            <div className="user-info">
                                <div className="name">Charlie Johnson</div>
                                <div className="location">{t('user_location')}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default TestimonialsSection