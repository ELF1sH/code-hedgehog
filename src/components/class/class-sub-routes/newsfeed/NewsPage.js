import { Container, Row } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const NewsPage = () => {
    const { t } = useTranslation()

    return (
        <Container fluid className="section-right-margin-class p-md-5 p-2">
            <Row className="mb-3 mx-0">
                <NavLink to="/class/newsfeed" className="text-decoration-none blue-link">
                    <span>{t("newsfeed.newsCard.btnBack")}</span>
                </NavLink>
            </Row>
            <Row className="mx-0">
                <h2 className="news-page-header mx-2 px-0">{t("newsfeed.newsCard.header")}</h2>
            </Row>
            <Row className="mb-4 mx-0">
                <span className="secondary-text">{t("newsfeed.newsCard.tags")}</span>
            </Row>
            <Row className="mb-3 mx-0">
                <p>
                    {t("newsfeed.newsCard.p1")} <br />
                    {t("newsfeed.newsCard.p2")} <br />
                    {t("newsfeed.newsCard.p3")} <br />
                    {t("newsfeed.newsCard.p4")}
                </p>
            </Row>
            <Row className="mb-3 mx-0">
                <p>
                    {t("newsfeed.newsCard.p1")} <br />
                    {t("newsfeed.newsCard.p2")} <br />
                    {t("newsfeed.newsCard.p3")} <br />
                    {t("newsfeed.newsCard.p4")}
                </p>
            </Row>
            <Row className="mb-3 mx-0">
                <p>
                    {t("newsfeed.newsCard.p1")} <br />
                    {t("newsfeed.newsCard.p2")} <br />
                    {t("newsfeed.newsCard.p3")} <br />
                    {t("newsfeed.newsCard.p4")}
                </p>
            </Row>
        </Container>
    )
}

export default NewsPage