import { Container, Row, Col} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Form from '../../../classes/ClassesForm';
import TasksList from './TasksLIst';
import "./Tasks.css"

const TasksPage = () => {
    return (
        <Row className="p-md-5 p-2 section-right-margin">
            <h1 className="section-header p-0 mb-4">Задачи</h1>
            <Form placeholder1="Название" placeholder2="Контесты" />
            <TasksList />
        </Row>
    )
}

export default TasksPage