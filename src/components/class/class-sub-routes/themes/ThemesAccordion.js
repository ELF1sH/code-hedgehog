import { Accordion } from "react-bootstrap"
import ThemesAccordionFilling from "./ThemesAccordionFilling"
import LinkWithIcon from "../../../classes/LinkWithIcon"
import tasksIcon from '../../../../images/LinkIcons/tasks-icon-blue.svg'

const ThemesAccordion = () => {
    return (
        <Accordion defaultActiveKey={[]} alwaysOpen className="px-0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Основы программирования</Accordion.Header>
                <Accordion.Body>

                    <Accordion defaultActiveKey={[]} alwaysOpen className="px-0 internal-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="inner-accord-header">
                                <span>Присваивание и арифметика</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="inner-accord-header">
                                <span>Условия</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="inner-accord-header">
                                <span>Циклы</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Основы программирования</Accordion.Header>
                <Accordion.Body>

                    <Accordion defaultActiveKey={[]} alwaysOpen className="px-0 internal-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="inner-accord-header">
                                <span>Присваивание и арифметика</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="inner-accord-header">
                                <span>Условия</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="inner-accord-header">
                                <span>Циклы</span>
                                <LinkWithIcon name="Задачи" className="ml-auto" iconSrc={tasksIcon} />
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                <ThemesAccordionFilling themes={["Проверка компиляции", "Hello world", "Сумма двух чисел", "Разность двух чисел"]} />

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ThemesAccordion