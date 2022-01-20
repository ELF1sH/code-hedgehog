import { useState } from 'react'
import { IsOpenContext } from './SideBar'
import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
    const { i18n } = useTranslation();
    const [curLan, setCurLan] = useState(i18n.language)

    const handleChange = () => {
        if (curLan == "ru") setCurLan("en")
        else setCurLan("ru")
        i18n.changeLanguage(curLan == "ru" ? "en" : "ru")
    }

    return (
        <IsOpenContext.Consumer>
            {isOpen => {
                return (
                    isOpen ?
                    <div className="toggle-button">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={i18n.language == "ru" ? false : true}
                            onChange={handleChange}
                        />
                        <div className="knobs">
                            <span></span>
                        </div>
                        <div className="layer"></div>
                    </div> :
                    <div className="d-flex justify-content-center text-uppercase">
                        <p>{curLan}</p>
                    </div>
                )
            }}
        </IsOpenContext.Consumer>
    )
}

export default LanguageToggler