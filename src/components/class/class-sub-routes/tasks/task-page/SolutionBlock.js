import { NavLink } from "react-router-dom";
import ButtonDef from "../../../../default-components/Button"

const SolutionBlock = () => {
    return (
        <div className="default-box-shadow p-4 solution-block">
            <div>
                <p className="mb-1 font-weight-bold">Ограничение по времени</p>
                <p>1000 ms</p>
            </div>
            <div>
                <p className="mb-1 font-weight-bold">Ограничение по времени</p>
                <p>1000 ms</p>
            </div>
            <div>
                <p className="mb-1 font-weight-bold">Ограничение по времени</p>
                <p>1000 ms</p>
            </div>
            <div>
                <p className="mb-1 font-weight-bold">Ограничение по времени</p>
                <p>1000 ms</p>
            </div>
            <div className="d-flex">
                <NavLink to="/send-solution" className="text-decoration-none blue-link mb-3 px-0">
                    <ButtonDef className="w-100 solution-block" text="Отправить" />
                </NavLink>
            </div>
        </div>
    )
}

export default SolutionBlock