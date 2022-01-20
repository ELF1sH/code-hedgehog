import { Pagination } from "react-bootstrap"

const PaginationHedgehog = (props) => {
    return (
        props.finish - props.start > 5 ?
            props.active <= 3 ?
                <Pagination className={props.className + " m-3"}>
                    <Pagination.Prev />
                    <Pagination.Item active={props.active == 1 ? true : false}>{1}</Pagination.Item>
                    <Pagination.Item active={props.active == 2 ? true : false}>{2}</Pagination.Item>
                    <Pagination.Item active={props.active == 3 ? true : false}>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{props.finish - 2}</Pagination.Item>
                    <Pagination.Item>{props.finish - 1}</Pagination.Item>
                    <Pagination.Item>{props.finish}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            : props.active >= props.finish - 2 ? 
                <Pagination className={props.className + " m-3"}>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item active={props.active == props.finish - 2 ? true : false}>{props.finish - 2}</Pagination.Item>
                    <Pagination.Item active={props.active == props.finish - 1 ? true : false}>{props.finish - 1}</Pagination.Item>
                    <Pagination.Item active={props.active == props.finish ? true : false}>{props.finish}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            :
                <Pagination className={props.className + " m-3"}>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{props.active - 1}</Pagination.Item>
                    <Pagination.Item active>{props.active}</Pagination.Item>
                    <Pagination.Item>{props.active + 1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{props.finish}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
        :
            <Pagination className={props.className + " m-3"}>
                <Pagination.Prev />
                {
                    [...Array(props.finish)].map((_, index) => 
                        <Pagination.Item active={props.active == index + 1 ? true : false} key={index}>{index + 1}</Pagination.Item>)
                }
                <Pagination.Next />
            </Pagination>
    )
}

export default PaginationHedgehog