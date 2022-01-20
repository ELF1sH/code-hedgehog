import { OverlayTrigger, Tooltip, Popover } from 'react-bootstrap'
import LinkWithIcon from '../../../classes/LinkWithIcon'

import robotGray from '../../../../images/Icons/robot-icons/robot-gray.svg'
import robotGreen from '../../../../images/Icons/robot-icons/robot-green.svg'
import robotRed from '../../../../images/Icons/robot-icons/robot-red.svg'
import robotYellow from '../../../../images/Icons/robot-icons/robot-yellow.svg'

import eyeGray from '../../../../images/Icons/eye-icons/eye-gray-small.svg'
import eyeGreen from '../../../../images/Icons/eye-icons/eye-green-small.svg'
import eyeRed from '../../../../images/Icons/eye-icons/eye-red-small.svg'

import sourceCode from '../../../../images/Icons/source-code-icon.svg'
import blueEye from '../../../../images/Icons/blue-eye.svg'
import ellipsisIcon from '../../../../images/Icons/ellipsis-icon.svg'

import deleteIcon from '../../../../images/Icons/delete-icon.svg'
import resendIcon from '../../../../images/Icons/resend-icon.svg'
import archiveIcon from '../../../../images/Icons/archive-icon.svg'

const popover = (
    <Popover id="popover-queue-menu">
        <Popover.Body>
            <LinkWithIcon name='Переотправить' iconSrc={resendIcon} />
            <LinkWithIcon name='В архив' iconSrc={archiveIcon} />
            <LinkWithIcon name='Удалить' iconSrc={deleteIcon} danger={true} />
        </Popover.Body>
    </Popover>
);

const QueueListItem = (props) => {
    const eyeIcon = getEye(props.humanResult)
    const robotIcon = getRobot(props.machineResult)

    return (
        <div className="d-flex flex-wrap queue-table-line py-2">
            <div className="queue-table-item d-flex justify-content-center align-items-center">1</div>
            <div className="queue-table-item d-flex align-items-center">Иванов Иван Иванович</div>
            <div className="queue-table-item d-flex align-items-center">Проверка компиляции</div>
            <div className="queue-table-item d-flex align-items-center">C++</div>
            <div className="queue-table-item d-flex align-items-center">
                <div>
                    <div className='d-flex align-items-center' role='button'>
                        <img src={robotIcon} className="result-img-robot" />
                        <OverlayTrigger
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={'tooltip-bottom'} className='mt-2' >
                                    <span style={{ fontWeight: "300" }}>Вердикт тестирующей системы</span>
                                </Tooltip>
                            }
                        >
                            {
                                props.machineResult === 0 ?
                                    <span className="result-span text-secondary-custom">Ожидание</span>
                                    : props.machineResult === 1 ?
                                        <span className="result-span text-warning-custom">Тестирование</span>
                                        : props.machineResult === 2 ?
                                            <span className="result-span text-danger-custom">Отклонено</span>
                                            : <span className="result-span text-success-custom">ОК</span>
                            }
                        </OverlayTrigger>
                    </div>

                    <div className='d-flex align-items-center' role='button'>
                        <img src={eyeIcon} className="result-img-eye" />
                        <OverlayTrigger
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={'tooltip-bottom'} className='mt-2' >
                                    <span style={{ fontWeight: "300" }}>Вердикт преподавателя</span>
                                </Tooltip>
                            }
                        >
                            {
                                props.humanResult === 0 ?
                                    <span className="result-span text-secondary-custom">Ожидание</span>
                                    : props.humanResult === 1 ?
                                        <span className="result-span text-warning-custom">Тестирование</span>
                                        : props.humanResult === 2 ?
                                            <span className="result-span text-danger-custom">Отклонено</span>
                                            : <span className="result-span text-success-custom">ОК</span>
                            }
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <div className="queue-table-item">
                <div className='date-text'>21 июня 2021,</div>
                <div className='date-text'>12:34:45</div>
            </div>
            <div className="queue-table-item d-flex align-items-center justify-content-start links-wrapper">
                <LinkWithIcon className="mr-0">
                    <img src={sourceCode} />
                </LinkWithIcon>
                <LinkWithIcon>
                    <img src={blueEye} />
                </LinkWithIcon>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <img src={ellipsisIcon} className="ellipsis-icon" role='button' />
                </OverlayTrigger>
            </div>
        </div>
    )
}

function getEye(humanResult) {
    let eye
    switch (humanResult) {
        case 0:
            eye = eyeGray
            break
        case 2:
            eye = eyeRed
            break
        case 3:
            eye = eyeGreen
            break
    }
    return eye
}

function getRobot(machineResult) {
    let robot
    switch (machineResult) {
        case 0:
            robot = robotGray
            break
        case 1:
            robot = robotYellow
            break
        case 2:
            robot = robotRed
            break
        case 3:
            robot = robotGreen
            break
    }
    return robot
}

export default QueueListItem