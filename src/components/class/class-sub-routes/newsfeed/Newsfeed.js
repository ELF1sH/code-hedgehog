import { Row } from "react-bootstrap"
import NewsCard from "./NewsCard"
import "./Newsfeed.css"

const Newsfeed = () => {
    return (
        <Row className="p-md-5 p-2 section-right-margin-class">
            <h1 className="section-header p-0 mb-4">Лента</h1>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </Row>
    )
}

export default Newsfeed