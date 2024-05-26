// import { useEffect, useState } from "react";
// import axios from 'axios';
// import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import './CarCard.scss';
import { Link } from "react-router-dom";

interface Car {
    imageSrc: string;
    carName: string;
    carModal: string;
    carYear: number;
    carTransmission: string;
    //transmission?: string;
    carHorsepower: number;
    carFuelType: string;
    carPrice: number;
    LinkPath: string;
}
const CarCard = ({ imageSrc, carName, carModal, carYear, carTransmission, carHorsepower, carFuelType, carPrice, LinkPath }: Car) => {

    const { t } = useTranslation();

    return (
        <>
            <div className="car-card-item">
                <div className="img-holder">
                    <img src={imageSrc} alt='pic' />
                    {/* {car.image ? (
                        <img src={IMAGES.Car1} alt="pic" />
                    ) : (
                        <img src={IMAGES.notFound} alt="pic" />
                    )} */}

                </div>
                <div className="item-name">
                    <span>{carName} </span>
                    <span>{carModal}</span>
                </div>
                <div className="rate-bx">
                    <img src={IMAGES.GoldStar} alt='pic' />
                    <span className='num'>4.8</span>
                    <span className='reviews'>(2.436 {t('reviews')})</span>
                </div>
                <div className="data-with-icons">
                    <div className="item">
                        <img src={IMAGES.calendar} alt="pic" />
                        <span className="text">
                            {carYear}
                        </span>
                    </div>
                    <div className="item">
                        <img src={IMAGES.itemTypeImg} alt="pic" />
                        <span className="text">
                            {carTransmission}
                        </span>
                    </div>
                    <div className="item">
                        <img src={IMAGES.horse4} alt="pic" />
                        <span className="text">
                            {carHorsepower}
                        </span>
                    </div>
                    <div className="item">
                        <img src={IMAGES.fuelTypeImg} alt="pic" />
                        <span className="text">
                            {carFuelType}
                        </span>
                    </div>
                </div>

                <div className="price-bx">
                    <span className="title">{t('price')}</span>
                    <span className="details">
                        <span className="price">${carPrice}</span>
                        <span className="day">/ {t('day')}</span>
                    </span>
                </div>

                <Link
                    to={LinkPath}
                    className="card-btn"
                    onClick={() => {
                        window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }}
                >
                    {t('rent_now')} <img src={IMAGES.arrowRight} alt="pic" />
                </Link>
            </div>
        </>
    )
}

export default CarCard
