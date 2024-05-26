import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import IMAGES from '@assets/images/images';
import './PartnersSection.scss';

const PartnersSection = () => {
    return (
        <section className='partners-section'>
            <Swiper
                spaceBetween={50}
                //slidesPerView={5}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className='partners-slider'
                breakpoints={{   
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },                 
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                      },
                }}
            >
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand1} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand2} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand3} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand4} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand5} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand6} alt='pic' /></div></SwiperSlide>
                <SwiperSlide><div className="img-holder"><img src={IMAGES.carBrand7} alt='pic' /></div></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default PartnersSection