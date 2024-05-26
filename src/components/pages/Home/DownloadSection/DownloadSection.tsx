import { useTranslation } from "react-i18next";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IMAGES from '@assets/images/images';
import { Link } from "react-router-dom";
import './DownloadSection.scss';
import { useState } from "react";

const DownloadSection = () => {

    const { t } = useTranslation();

    const [post, setPost] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const handleInput = (event: any) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }
    function handleSubmit(event: any) {
        event.preventDefault()
        axios.post('http://upskilling-egypt.com:3001/contact', {
            name: post?.name,
            phone: post?.phone,
            email: post?.email

        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <section className="download-section">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="section-header align-items-start">
                            <div className="text">
                                <h3>
                                    {t('download_header_text_1')} <br />
                                    {t('download_header_text_2')} <span className="colored">{t('free')}</span>
                                </h3>
                                <p>{t('download_header_text_p')}</p>
                            </div>
                        </div>
                        <div className="apps-bx">
                            <span className="app-item">
                                <Link to='/'><img src={IMAGES.playStore} alt='pic' /></Link>
                            </span>
                            <span className="app-item">
                                <Link to='/'><img src={IMAGES.appStore} alt='pic' /></Link>
                            </span>
                        </div>

                        <div className="download-form-bx">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control onChange={handleInput} name="name" type="text" placeholder={t('name')} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onChange={handleInput} name="phone" type="number" placeholder={t('phone_number')} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onChange={handleInput} name="email" type="email" placeholder={t('email')} />
                                </Form.Group>

                                <div className="download-form-btn">
                                    <Button variant="primary" type="submit">
                                        {t('send')}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className="phone-mockup">
                            <img src={IMAGES.iPhoneMockup} alt='pic' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DownloadSection