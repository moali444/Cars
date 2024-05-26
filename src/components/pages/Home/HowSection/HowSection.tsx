import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '@assets/images/images';
import './HowSection.scss';

const HowSection = () => {

    const { t } = useTranslation();

    return (
        <section className="how-section">
            <Container>
                <div className="section-header">
                    <div className="title">{t('how_header_title')}</div>
                    <div className="text">
                        <h3>{t('how_header_text')}</h3>
                    </div>
                </div>

                <Row className="justify-content-md-center mt-5">
                    <Col xs={12} md={3}>
                        <div className="work-item">
                            <div className="icon-bx">
                                <img src={IMAGES.locationBold} alt="pic" />
                            </div>
                            <div className="text-bx">
                                <h4>{t('choose_location_title')}</h4>
                                <p>{t('choose_location_text_1')} <br />{t('choose_location_text_2')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="work-item">
                            <div className="icon-bx">
                                <img src={IMAGES.calendarBold} alt="pic" />
                            </div>
                            <div className="text-bx">
                                <h4>{t('pick_up_title')}</h4>
                                <p>{t('pick_up_text_1')} <br />{t('pick_up_text_2')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="work-item">
                            <div className="icon-bx">
                                <img src={IMAGES.carBold} alt="pic" />
                            </div>
                            <div className="text-bx">
                                <h4>{t('book_car_title')}</h4>
                                <p>{t('book_car_text_1')} <br />{t('book_car_text_2')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowSection