import { Container, Row, Form } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import AceEditor from 'react-ace'
import Button from '../../../../default-components/Button';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-csharp"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-github";

const progLangs = ["c_cpp", "csharp", "java", "python"]

const SendSolutionPage = () => {
    const [curLang, setCurLang] = useState(progLangs[0])

    const onChange = (event) => {
        setCurLang(event.target.value)
    }

    return (
        <Container fluid className="section-right-margin p-md-5 p-2">
            <Row className="mb-2 mx-0">
                <NavLink to="/task" className="text-decoration-none blue-link mb-3 px-0">
                    <span>← Назад</span>
                </NavLink>
                <h2 className="news-page-header mb-4 px-0">Проверка компиляции</h2>
            </Row>
            <Row className="mb-4 mx-0">
                <AceEditor
                    width="100%"
                    fontSize={16}
                    mode={curLang}
                    theme="github"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            </Row>
            <Row className="mx-0">
                <Form className="d-flex flex-wrap px-0">
                    <Form.Select className="d-inline default-input p-2 w-50 mr-3 mb-3" onChange={onChange}>
                        <option value={progLangs[0]}>C++</option>
                        <option value={progLangs[1]}>C#</option>
                        <option value={progLangs[2]}>Java</option>
                        <option value={progLangs[3]}>Python</option>
                    </Form.Select>
                    <Button text="Отправить" className="mb-3" />
                    <Form.Group className="w-100" controlId="defaultLanguageCheckbox">
                        <Form.Check type="checkbox" label="Сделать языком по умолчанию" />
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}

export default SendSolutionPage