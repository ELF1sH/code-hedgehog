import { Button } from 'react-bootstrap'

const ButtonDef = (props) => {
    return (
        <Button className={`default-button ${props.className}`}>
            {typeof props.iconSrc !== 'undefined' ? <img src={props.iconSrc} className='mr-2' /> : null}
            {props.text}
        </Button>
    )
}

export default ButtonDef