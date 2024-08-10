import './OptionFiltroContainer.css'
import {ChangeEvent} from "react";

type props = {
    title: string,
    value: string[],
    group: string,
    handle: (e: ChangeEvent<HTMLInputElement>) => void
}

const OptionFiltroContainer = ({ title, value, group, handle }: props) => {
    return (
        <div className="div-options-filtro-veiculos">
            <h1>{title}</h1>
            <div className="div-options-radios-veiculos row">
                {value.map((valor, index) =>
                    <div className="col-auto" key={index + valor}>
                        <input type="radio" name={group} id={valor} onChange={handle} value={valor}/>
                        <label htmlFor={valor}>{valor}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OptionFiltroContainer
