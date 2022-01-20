import { Row } from 'react-bootstrap'
import "./Themes.css"

import ThemesAccordion from './ThemesAccordion'

const ThemesPage = () => {
    return (
        <Row className="p-md-5 p-2 section-right-margin">
            <h1 className="section-header p-0 mb-4">Темы задач</h1>
            <ThemesAccordion />
        </Row>
    )
}

export default ThemesPage