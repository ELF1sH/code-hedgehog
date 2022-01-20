import leftArrowImage from "../../images/LeftArrow.svg"
import rightArrowImage from "../../images/RightArrow.svg"
import "./SideBar.css"
import { IsOpenContext } from "./SideBar"

const CollapseArrow = (props) => {
    const handleClick = () => {
        props.toggle()
    }

    return (
        <IsOpenContext.Consumer>
            {isOpen => {
                return (
                    isOpen ? <img src={leftArrowImage} className="collapse-arrow" onClick={handleClick} role="button" /> :
                    <img src={rightArrowImage} className="collapse-arrow-closed" onClick={handleClick} role="button" />
                )
            }}
        </IsOpenContext.Consumer>
    )
}

export default CollapseArrow