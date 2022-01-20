import React, { useState, useRef, useEffect } from "react"
import Logo from "./Logo"
import "./SideBar.css"
import SideBarMenu from "./SideBarMenu/SideBarMenu"
import CollapseArrow from "./CollapseArrow"
import LanguageToggler from "./LanguageToggler"
import ProfileInfo from "./ProfileInfo"

const SideBarSmallScreens = (props) => {
    return (
        <div className={`sidebar-wrapper d-flex flex-column justify-content-between position-absolute slide-out-sidebar ${props.isActive ? "slide-out-sidebar-active" : ".slide-out-sidebar-not-active"}`}>
            <div>
                <i className="fas fa-times exit-icon" onClick={() => props.setIsActive(false)} role="button"></i>
                <Logo role="button" style={{zIndex: 3000}} />
                <SideBarMenu setIsActive={props.setIsActive} />
            </div>
            <div className="cont">
                <LanguageToggler />
                <ProfileInfo />
            </div>
        </div>
    )
}

export default SideBarSmallScreens