import TasksListItem from "./TasksListItem"
import Pagination from "../../../default-components/Pagination"

import { useTranslation } from "react-i18next"

const TasksList = () => {
    const { t } = useTranslation()

    return (
        <div className="p-0 default-box-shadow tasks-list-wrapper">
            <div className="d-flex font-weight-bold tasks-table-line">
                <div className="tasks-table-item table-item-header d-flex justify-content-center align-items-center">№</div>
                <div className="tasks-table-item table-item-header">Название</div>
                <div className="tasks-table-item table-item-header">Контест</div>
                <div className="tasks-table-item table-item-header">Баллы</div>
                <div className="tasks-table-item table-item-header">Срок</div>
            </div>

            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="green" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="gray" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="red" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="green" />

            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="green" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="gray" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="red" />
            <TasksListItem number="1" name={t("tasksList.task.name")} contest={t("tasksList.task.contest")} points="10" date={t("tasksList.task.date")} status="green" />

            <Pagination start={1} finish={12} active={6} />
        </div>
    )
}

export default TasksList