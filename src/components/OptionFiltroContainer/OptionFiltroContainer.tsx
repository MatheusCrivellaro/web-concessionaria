import './OptionFiltroContainer.css'
import {ChangeEvent} from "react";

type props = {
    title: string,
    value: string[],
    group: string,
    handle: (e: ChangeEvent<HTMLInputElement>) => void,
    todos: boolean
    selected: string
}

const OptionFiltroContainer = ({ title, value, group, handle, todos, selected}: props) => {
    return (
        <div className="div-options-filtro-veiculos">
            <h1>{title}</h1>
            <div className="div-options-radios-veiculos row">
                {todos ?
                    <div className="col-auto">
                        <input type="radio" name={group} id="todos" onChange={handle} value="todos" checked={selected.length ===0 || selected.includes("todos")}/>
                        <label htmlFor="todos">Todos</label>
                    </div> :
                    ""
                }
                {value.map((valor, index) =>
                    <div className="col-auto" key={index + valor}>
                        <input type="radio" name={group} id={valor} onChange={handle} value={valor} checked={selected.includes(valor)}/>
                        <label htmlFor={valor}>{valor}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OptionFiltroContainer
