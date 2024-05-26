import { useTranslation } from "react-i18next";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchBar.scss';

const SearchBar = ({ setSearchValue, handleSearch }: any) => {

    const { t } = useTranslation();

    return (
        <Form>
            <Row>
                <Col xs={12}>
                    <Form.Control
                        type="text"
                        placeholder={t('search_by_name')}
                        className="search-input mr-sm-2"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </Col>
                <div className="search-btn-bx">
                    <Button onClick={handleSearch} className="search-btn">{t('search')}</Button>
                </div>
            </Row>
        </Form>
    )
}

export default SearchBar