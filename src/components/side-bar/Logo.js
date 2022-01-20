import logoImage from '../../images/Logo.svg'
import logoClosedImage from '../../images/LogoClosed.svg'
import "../side-bar/SideBar.css"
import { IsOpenContext } from "./SideBar"

const Logo = () => {
    return (
        <IsOpenContext.Consumer>
            {isOpen => {
                return (
                    <div className="d-flex justify-content-center">
                        {isOpen ? <img src={logoImage} className="m-3" /> : <img src={logoClosedImage} className="logo-closed" />}
                    </div>
                )
            }}
        </IsOpenContext.Consumer>

    )
}

export default Logo