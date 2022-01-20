import QueueListItem from "./QueueListItem"
import Pagination from "../../../default-components/Pagination"

const QueueList = () => {
    return (
        <div className="p-0 default-box-shadow queue-list-wrapper">
            <div className="d-flex font-weight-bold queue-table-line">
                <div className="queue-table-item table-item-header d-flex justify-content-center align-items-center">№</div>
                <div className="queue-table-item table-item-header">Автор</div>
                <div className="queue-table-item table-item-header">Задача</div>
                <div className="queue-table-item table-item-header">Язык</div>
                <div className="queue-table-item table-item-header">Вердикт</div>
                <div className="queue-table-item table-item-header">Дата</div>
            </div>

            <QueueListItem humanResult={3} machineResult={3} />
            <QueueListItem humanResult={0} machineResult={2} />
            <QueueListItem humanResult={0} machineResult={1} />
            <QueueListItem humanResult={2} machineResult={3} />
            <QueueListItem humanResult={0} machineResult={0} />
            <QueueListItem humanResult={0} machineResult={0} />
            <QueueListItem humanResult={0} machineResult={0} />
            <QueueListItem humanResult={0} machineResult={0} />
            <QueueListItem humanResult={0} machineResult={0} />
            <QueueListItem humanResult={0} machineResult={0} />

            <Pagination start={1} finish={12} active={3} />
        </div>
    )
}

export default QueueList