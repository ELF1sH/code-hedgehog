import { Row } from 'react-bootstrap'
import "./Queue.css"

import QueueList from './QueueList'

const QueuePage = () => {
    return (
        <Row className="p-md-5 p-2 section-right-margin">
            <h1 className="section-header p-0 mb-4">Очередь</h1>
            <QueueList />
        </Row>
    )
}

export default QueuePage