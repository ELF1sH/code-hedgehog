import { Row } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <Row className='d-flex class-navbar' role="button">
            <NavLink to="newsfeed" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link1")}
            </NavLink>
            <NavLink to="tasks" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link2")}
            </NavLink>
            <NavLink to="themes" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link3")}
            </NavLink>
            <NavLink to="queue" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link4")}
            </NavLink>
            <NavLink to="postmoderation" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link5")}
            </NavLink>
            <NavLink to="results" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link6")}
            </NavLink>
            <NavLink to="users" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link7")}
            </NavLink>
            <NavLink to="rating" className="nav-link navbar-item d-flex justify-content-center align-items-center">
                {t("class.navbar.link8")}
            </NavLink>
        </Row>
    )
}

export default Navbar