import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import eyeGray from '../../../../images/Icons/EyeGray.svg'
import eyeGreen from '../../../../images/Icons/EyeGreen.svg'
import eyeRed from '../../../../images/Icons/EyeRed.svg'

import LinkWithIcon from '../../../classes/LinkWithIcon'

import { useTranslation } from 'react-i18next';

const TasksListItem = (props) => {
    const { t } = useTranslation()

    let eye
    let leftBadgeClass = "badge-" + props.status
    switch (props.status) {
        case "gray":
            eye = eyeGray
            break
        case "green":
            eye = eyeGreen
            break
        case "red":
            eye = eyeRed
            break
        default:
            eye = eyeGray
    }

    return (
        <div className={"d-flex flex-wrap tasks-table-line task-badge " + leftBadgeClass}>
            <div className="tasks-table-item d-flex justify-content-center align-items-center">{props.number}</div>
            <div className="tasks-table-item">{props.name}</div>
            <div className="tasks-table-item">{props.contest}</div>
            <div className="tasks-table-item d-flex justify-content-center align-items-center">{props.points}</div>
            <div className="tasks-table-item">{props.date}</div>
            <div className="tasks-table-item d-flex justify-content-center align-items-center">
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={'tooltip-bottom'} className='mt-2' >
                            <span style={{ fontWeight: "300" }}>{t("tasksList.task.tooltip.header")}</span>
                            <span style={{ fontWeight: "700" }}>
                                {props.status === 'green' ? t("tasksList.task.tooltip.statusGreen") : props.status === 'red' ? t("tasksList.task.tooltip.statusRed") : t("tasksList.task.tooltip.statusGray")}
                            </span>
                        </Tooltip>
                    }
                >
                    <img src={eye} className="" role="button" />
                </OverlayTrigger>
            </div>
            <div className="tasks-table-item d-flex justify-content-center align-items-center">
                <NavLink to="/task" className="text-decoration-none">
                    <LinkWithIcon name={t("tasksList.task.btnName")} />
                </NavLink>
            </div>
        </div>
    )
}

export default TasksListItem