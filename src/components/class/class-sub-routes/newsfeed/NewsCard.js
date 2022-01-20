import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const NewsCard = () => {
    const { t } = useTranslation()

    return (
        <Container fluid className="default-box-shadow p-4 news-card mb-4">
            <Row>
                <h3 className="font-weight-bold">{t("newsfeed.newsCard.header")}</h3>
            </Row>
            <Row>
                <p>
                {t("newsfeed.newsCard.p1")} <br />
                {t("newsfeed.newsCard.p2")} <br />
                {t("newsfeed.newsCard.p3")} <br />
                {t("newsfeed.newsCard.p4")}
                </p>
            </Row>
            <Row>
                <Col md>
                    <span className="secondary-text">{t("newsfeed.newsCard.tags")}</span>
                </Col>
                <Col xs="auto">
                    <NavLink to="/news" className="text-decoration-none blue-link">
                        <span>{t("newsfeed.newsCard.btn")}</span>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default NewsCard