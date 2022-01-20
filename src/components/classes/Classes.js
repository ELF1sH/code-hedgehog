import { Container } from 'react-bootstrap'
import ClassesHeader from './ClassesHeader'
import ClassesForm from './ClassesForm'
import ClassCardsWrapper from './ClassCardsWrapper'
import "./Classes.css"

import { useTranslation } from "react-i18next"

const Classes = () => {
    const { t } = useTranslation()

    return (
        <Container fluid className="p-sm-5 p-4 section-right-margin">
            <ClassesHeader />
            <ClassesForm placeholder1={t("classes.form.input1")} placeholder2={t("classes.form.input2")} />
            <ClassCardsWrapper />
        </Container>
    )
}

export default Classes