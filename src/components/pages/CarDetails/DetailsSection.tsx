import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import IMAGES from '@assets/images/images';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './DetailsSection.scss';
import { Link, useParams } from "react-router-dom";

const DetailsSection = () => {

    const { t } = useTranslation();

    interface Item {
        id: string;
        image: string;
        make: string;
        model: string;
        year: number;
        transmission: string;
        horsepower: number;
        fuelType: string;
        price: number;
    }

    let [car, setCar] = useState<Array<Item>>([]);
    const { carId } = useParams();
    const singlePro = async () => {
        let response = await axios.get(`https://freetestapi.com/api/v1/cars/${carId}`);
        setCar(response.data);
    };
    useEffect(() => {
        singlePro();
    }, []);

    return (
        <>
            <Container>
                <div>
                    <div className="breadcrumb-bx">
                        <Link to='/'>{t('home')}</Link>
                        <Link to='/all-cars'>{t('all_cars')}</Link>
                        <Link className="active" to='/'>{t('all_cars')}</Link>
                    </div>
                </div>
            </Container>

            <section className="details-section">
                <div className="why-content-bx">
                    <div className="img-holder">
                        <img src={IMAGES.audiCar} alt='pic' />
                    </div>

                    <div className="text-bx">
                        <div className="section-header align-items-start">
                            <div className="title">{t('car_details')}</div>
                            <div className="text">
                                <h3>{car.make} {car.model}</h3>
                            </div>
                        </div>

                        <div className="items-list">
                            <div className="item">
                                <div className="icon-bx">
                                    <img src={IMAGES.calendar} alt='pic' />
                                </div>
                                <div className="text">
                                    <h4>{car.year}</h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-bx">
                                    <img src={IMAGES.itemTypeImg} alt='pic' />
                                </div>
                                <div className="text">
                                    <h4>{car.transmission}</h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-bx">
                                    <img src={IMAGES.horse4} alt='pic' />
                                </div>
                                <div className="text">
                                    <h4>{car.horsepower}</h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-bx">
                                    <img src={IMAGES.fuelTypeImg} alt='pic' />
                                </div>
                                <div className="text">
                                    <h4>{car.fuelType}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DetailsSection