import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '@assets/images/images';
import { Link } from "react-router-dom";
import CarCard from "@components/shared/CarCard/CarCard";
import { SearchBar } from '@components/index';
import Header from "@components/shared/Header/Header";
import PaginationSection from "@components/shared/PaginationSection/PaginationSection";
import './Cars.scss';

const Cars = () => {

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
        let response = await axios.get('https://freetestapi.com/api/v1/cars');
        setCars(response.data);
    };

    useEffect(() => {
        getCarsList()
    }, []);

    return (
        <>
            <Header />
            <section className="all-cars-section">
                <Container>
                    <div>
                    <div className="breadcrumb-bx">
                        <Link to='/'>{t('home')}</Link>
                        <Link className="active" to='/'>{t('all_cars')}</Link>
                    </div>
                    </div>

                    <div className="section-header">
                        <div className="title">{t('popular_header_title')}</div>
                        <div className="text">
                            <h3>{t('popular_header_text')}</h3>
                        </div>
                    </div>

                    <div className="popular-search-bx mb-5">
                        <SearchBar setSearchValue={setSearchValue} />
                    </div>

                    <Row>
                        {cars.filter((car) => {
                            return searchValue?.toLowerCase() === undefined ? car : car.make.toLocaleLowerCase().includes(searchValue);
                        }).map((car) => (
                            <Col xs={12} sm={6} md={6} lg={3} key={car.id}>
                                <CarCard
                                    imageSrc={IMAGES.Car1}
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

                    <PaginationSection />
                </Container>
            </section>
        </>
    )
}

export default Cars