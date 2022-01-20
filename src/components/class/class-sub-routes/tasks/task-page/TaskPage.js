import { Container, Row, Col, Badge } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Paragraph from './Paragraph';
import TaskTable from './TaskTable';
import SolutionBlock from './SolutionBlock';

const TaskPage = () => {
    return (
        <Container fluid className="section-right-margin p-md-5 p-2">
            <Row className="mb-3 mx-0">
                <NavLink to="/class/tasks" className="text-decoration-none blue-link mb-3 px-0">
                    <span>← Назад</span>
                </NavLink>
                <h2 className="news-page-header mb-2 px-0">Проверка компиляции</h2>
                <div className="sub-header-info d-flex align-items-center px-0">
                    <Badge pill className="points-badge mr-3">5 баллов</Badge>
                    <span className="solved-number">Решили: 42</span>
                </div>
            </Row>
            <Row className="mx-0">
                <Col className="px-0 mr-4">
                    <Paragraph className="mb-5" header="Условие" paragraphs={[`Это интерактивная задача`, `При тестировании вашего решения по интерактивной задаче тот ввод, что будет подаваться в ваше решение (то есть те данные, что ваше решение читает) не являются заранее заготовленными, а строятся непосредственно в процессе тестирования вашей программы. Для этого жюри пишет специальную программу интерактор, вывод которой отправляется в ваше решение, а вывод вашего решения отправляется в интерактор. Иными словами, ваше решение и интерактор работают в паре и как ваше решение, так и интерактор могут принимать решение о том, что в данный момент вывести на основании "истории общения".`, `paragarph 3 adsgsdgsad`]} />
                    <Paragraph className="mb-4" header="Входные данные" paragraphs={['Изначально программа-интерактор выводит значение n (n <= 109).']} />
                    <Paragraph className="mb-4" header="Выходные данные" paragraphs={['В выходной файл должны выводиться корректные запросы и, в конце программы, правильный ответ. Каждый запрос нужно выводить с новой строки.']} />
                    <TaskTable header="Пример" />
                </Col>
                <Col md="auto" className="px-0 mx-auto">
                    <SolutionBlock />
                </Col>
            </Row>
        </Container>
    )
}

export default TaskPage