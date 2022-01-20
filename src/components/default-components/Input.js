import { Form } from 'react-bootstrap'

const Input = (props) => {
    return (
        <Form.Control type="text" placeholder={props.placeholder} className={props.className + " default-input"} />
    )
}

export default Input