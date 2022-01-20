import SideBarMenuItem from "./SideBarMenuItem"
import { useState } from "react"

import classesIcon from "../../../images/SideBarMenuIcons/ClassesIcon.svg"
import contestsIcon from "../../../images/SideBarMenuIcons/ContestsIcon.svg"
import groupsIcon from "../../../images/SideBarMenuIcons/GroupsIcon.svg"
import languagesIcon from "../../../images/SideBarMenuIcons/LanguagesIcon.svg"
import localisationIcon from "../../../images/SideBarMenuIcons/LocalisationIcon.svg"
import moderationIcon from "../../../images/SideBarMenuIcons/ModerationIcon.svg"
import queueIcon from "../../../images/SideBarMenuIcons/QueueIcon.svg"
import tasksIcon from "../../../images/SideBarMenuIcons/TasksIcon.svg"
import themesIcon from "../../../images/SideBarMenuIcons/ThemesIcon.svg"
import usersIcon from "../../../images/SideBarMenuIcons/UsersIcon.svg"

import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom";

const SideBarMenu = (props) => {
    const { t } = useTranslation();

    const [curActiveLink, setCurActiveLink] = useState(0)

    return (
        <div className="mb-5" onClick={() => typeof props.setIsActive !== "undefined" ? props.setIsActive(false) : null}>
            <NavLink
                to="/classes/"
                className={`text-decoration-none ${curActiveLink === 0 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(0) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item1")} imageSrc={classesIcon} />
            </NavLink>

            <NavLink
                to="/queue"
                className={`text-decoration-none ${curActiveLink === 1 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(1) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item2")} imageSrc={queueIcon} />
            </NavLink>

            <NavLink
                to="/postmoderation"
                className={`text-decoration-none ${curActiveLink === 2 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(2) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item3")} imageSrc={moderationIcon} notification="15" />
            </NavLink>

            <NavLink 
                to="/languages" 
                className={`text-decoration-none ${curActiveLink === 3 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(3) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item4")} imageSrc={languagesIcon} />
            </NavLink>

            <NavLink 
                to="/groups"
                className={`text-decoration-none ${curActiveLink === 4 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(4) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item5")} imageSrc={groupsIcon} />
            </NavLink>

            <NavLink 
                to="/themes" 
                className={`text-decoration-none ${curActiveLink === 5 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(5) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item6")} imageSrc={themesIcon} />
            </NavLink>

            <NavLink 
                to="/contests" 
                className={`text-decoration-none ${curActiveLink === 6 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(6) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item7")} imageSrc={contestsIcon} />
            </NavLink>

            <NavLink 
                to="/tasks" 
                className={`text-decoration-none ${curActiveLink === 7 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(7) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item8")} imageSrc={tasksIcon} notification="4" />
            </NavLink>

            <NavLink 
                to="/users" 
                className={`text-decoration-none ${curActiveLink === 8 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(8) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item9")} imageSrc={usersIcon} />
            </NavLink>

            <NavLink 
                to="/localisation" 
                className={`text-decoration-none ${curActiveLink === 9 ? 'active' : ""}`}
                onClick={ () => setCurActiveLink(9) } 
            >
                <SideBarMenuItem name={t("sidebarMenu.item10")} imageSrc={localisationIcon} />
            </NavLink>
        </div>
    )
}

export default SideBarMenu