import { Container, Row, Col } from 'react-bootstrap'
import ClassCard from './ClassCard'

const ClassCardsWrapper = () => {
    return (
        <Row className='row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-start cards-container'>
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
        </Row>
    )
}

export default ClassCardsWrapper