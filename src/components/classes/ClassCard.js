import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import threeDotsIcon from '../../images/Icons/ThreeDotsIcon.svg'
import moderationIcon from '../../images/SideBarMenuIcons/ModerationIcon.svg'
import queueIcon from '../../images/SideBarMenuIcons/QueueIcon.svg'
import tasksIcon from '../../images/SideBarMenuIcons/TasksIcon.svg'
import usersIcon from '../../images/SideBarMenuIcons/UsersIcon.svg'

import { useTranslation } from 'react-i18next';

const ClassCard = () => {
    const { t } = useTranslation()

    return (
        <div className="px-0 card-wrapper mr-sm-2">
            <Card className="w-100 card">
                <Card.Header className='card-header'>
                    <div className="gradient-layer"></div>
                    <div className='card-text-description'>
                        <h4 className='card-class-name mb-1' role="button">
                            <NavLink to="/class/newsfeed" className="text-decoration-none white-link">
                                {t("classes.classCard.header")}
                            </NavLink>
                        </h4>
                        <p className='card-class-department mb-0'>{t("classes.classCard.department")}</p>
                    </div>
                    <img src={threeDotsIcon} role="button" className="menu-icon" />
                </Card.Header>
                <Card.Body>
                    <NavLink to="/class/postmoderation" className="text-decoration-none black-link">
                        <div className="card-body-link" role="button">
                            <img src={moderationIcon} className="mr-3 icon" />
                            <span>{t("classes.classCard.links.link1")}</span>
                        </div>
                    </NavLink>
                    <NavLink to="/class/queue" className="text-decoration-none black-link">
                        <div className="card-body-link" role="button">
                            <img src={queueIcon} className="mr-3 icon" />
                            <span>{t("classes.classCard.links.link2")}</span>
                        </div>
                    </NavLink>
                    <NavLink to="/class/tasks" className="text-decoration-none black-link">
                        <div className="card-body-link" role="button">
                            <img src={tasksIcon} className="mr-3 icon" />
                            <span>{t("classes.classCard.links.link3")}</span>
                        </div>
                    </NavLink>
                    <NavLink to="/class/users" className="text-decoration-none black-link">
                        <div className="card-body-link" role="button">
                            <img src={usersIcon} className="mr-3 icon" />
                            <span>{t("classes.classCard.links.link4")}</span>
                        </div>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>

    )
}

export default ClassCard