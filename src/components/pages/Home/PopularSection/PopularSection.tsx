import { useState, useEffect } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '@assets/images/images';
import CarCard from "@components/shared/CarCard/CarCard";
import { SearchBar } from '@components/index';
import './PopularSection.scss';

const PopularSection = () => {

    const { t } = useTranslation();

    const [searchValue, setSearchValue] = useState<string>();

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
    let [cars, setCars] = useState<Array<Item>>([]);

    const getCarsList = async () => {
        let response = await axios.get('https://freetestapi.com/api/v1/cars?limit=4');
        setCars(response.data);
    };
    const handleSearch = () => {
        const filterCars = cars.filter((car) => {
            return searchValue?.toLowerCase() === undefined ? car : car.make.toLocaleLowerCase().includes(searchValue);
        })
        setCars(filterCars)
    }

    useEffect(() => {
        getCarsList()
    }, []);

    return (
        <section className="popular-section">
            <Container>
                <div className="popular-search-bx mb-5">
                    <SearchBar setSearchValue={setSearchValue} handleSearch={handleSearch} />
                </div>

                <div className="section-header">
                    <div className="title">{t('popular_header_title')}</div>
                    <div className="text">
                        <h3>{t('popular_header_text')}</h3>
                    </div>
                </div>

                {/* cards */}
                <Row>
                    {cars?.map((car) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={car.id}>
                            <CarCard
                                imageSrc={car.image ? (
                                    IMAGES.Car1
                                ) : (
                                    IMAGES.notFound
                                )}
                                carName={car.make}
                                carModal={car.model}
                                carYear={car.year}
                                carTransmission={car.transmission}
                                carHorsepower={car.horsepower}
                                carFuelType={car.fuelType}
                                carPrice={car.price}
                                LinkPath={`/details/${car.id}`}
                            />
                        </Col>

                    ))}
                </Row>

                <div className="show-more">
                    <Link
                        to='all-cars'
                        className="more-btn"
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }}
                    >
                        {t('show_all_vehicles')}
                        <img src={IMAGES.arrowRight} alt="pic" />
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default PopularSection