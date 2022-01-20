import { Row, Col } from 'react-bootstrap'
import Input from "../default-components/Input"
import Button from '../default-components/Button'

import searchIcon from '../../images/Icons/SearchIcon.svg'

import { useTranslation } from 'react-i18next'

const ClassesForm = (props) => {
    const { t } = useTranslation()

    return (
        <Row className="mb-4 px-0 mx-0">
            <Col lg className='px-0 mr-lg-3 mb-2 mb-lg-0'>
                <Input placeholder={props.placeholder1} />
            </Col>
            <Col lg className='px-0 mr-lg-3 mb-2 mb-lg-0'>
                <Input placeholder={props.placeholder2} />
            </Col>
            <Col lg="auto" xs="auto" className='px-0'>
                <Button text={t("classes.form.btn")} iconSrc={searchIcon} />
            </Col>
        </Row>
    )
}

export default ClassesForm