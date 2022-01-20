import React, { useState, useRef, useEffect } from "react"
import Logo from "./Logo"
import "./SideBar.css"
import SideBarMenu from "./SideBarMenu/SideBarMenu"
import CollapseArrow from "./CollapseArrow"
import LanguageToggler from "./LanguageToggler"
import ProfileInfo from "./ProfileInfo"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import SideBarSmallScreens from "./SideBarSmallScreens"

export const IsOpenContext = React.createContext(true)

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isActive, setIsActive] = useState(false)

    const width = useWindowDimensions().width

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        width >= 676 ?
        <IsOpenContext.Provider value={isOpen}>
            <div className="sidebar-wrapper position-relative d-flex flex-column justify-content-between" style={!isOpen ? { width: "60px" } : {}}>
                <div>
                    <CollapseArrow toggle={toggle} />
                    <Logo />
                    <SideBarMenu />
                </div>
                <div className="cont">
                    <LanguageToggler />
                    <ProfileInfo />
                </div>
            </div>
        </IsOpenContext.Provider> :
        <div>
            <i className="fas fa-bars bars-icon" onClick={() => setIsActive(true)} role="button"></i>
            <SideBarSmallScreens isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}

export default SideBar