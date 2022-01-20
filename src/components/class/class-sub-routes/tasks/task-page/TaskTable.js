import { Table } from "react-bootstrap"

const TaskTable = (props) => {
    return (
        <div>
            <h3 className="paragraph-header mb-2">{props.header}</h3>
            <Table bordered className="task-table">
                <thead>
                    <tr>
                        <th>Входные данные</th>
                        <th>Выходные данные</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 -3 3 -1</td>
                        <td>1.000000</td>
                    </tr>
                    <tr>
                        <td>-1 -6 -12 -7</td>
                        <td>-1.000000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TaskTable