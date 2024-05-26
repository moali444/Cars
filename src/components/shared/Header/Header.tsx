import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import IMAGES from '../../../assets/images/images';
import "./Header.scss";

const Header = () => {

    const { t } = useTranslation();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header-menu">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={IMAGES.coloredLogo} alt='pic' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link href="#">{t('become_a_renter')}</Nav.Link>
                            <Nav.Link href="#">{t('rental_deals')}</Nav.Link>
                            <Nav.Link href="#">{t('how_it_work')}</Nav.Link>
                            <Nav.Link href="#">{t('why_choose_us')}</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">{t('sign_in')}</Nav.Link>
                            <Nav.Link href="#" className='sign-up-btn'>{t('sing_up')}</Nav.Link>
                            <LanguageSwitch />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
