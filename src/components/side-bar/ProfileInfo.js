import profileAvatar from "../../images/ProfileAvatar.png"
import { IsOpenContext } from './SideBar'
import { useTranslation } from "react-i18next"

const ProfileInfo = () => {
    const { t } = useTranslation();

    return (
        <IsOpenContext.Consumer>
            {isOpen => {
                return (
                    isOpen ?
                    <div className="d-flex m-3">
                        <div>
                            <img src={profileAvatar} className="mr-2" role="button" />
                        </div>
                        <div>
                            <p className="font-weight-bold mb-0" role="button">{t("username")}</p>
                            <div className="profile-links">
                                <span className="mr-2" role="button">{t("profileLinks.item1")}</span>
                                <span role="button">{t("profileLinks.item2")}</span>
                            </div>
                        </div>
                    </div> :
                    <div>
                        <img src={profileAvatar} className="m-2 mb-3" role="button" />
                    </div>
                )
            }}
        </IsOpenContext.Consumer>
    )
}

export default ProfileInfo