import { Row } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const ClassHeader = () => {
    const { t } = useTranslation()

    return (
        <Row className="class-header-wrapper">
            <div className="class-header-description px-0">
                <h4 className="name">{t("class.header.name")}</h4>
                <p className="department">{t("class.header.department")}</p>
            </div>
            <div className="link-back-wrapper px-0 link-hover" role="button">
                <NavLink to="/classes" className="nav-link">
                    <i className="fas fa-chevron-left mr-2"></i>
                    <span className="link-back nav-link d-inline">{t("class.header.linkBack")}</span>
                </NavLink>
            </div>
        </Row>
    )
}

export default ClassHeader