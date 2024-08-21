import './OrdenacaoButton.css'

type props = {
    handle: (value: string) => void
}

const OrdenacaoButton = ({ handle }: props) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handle("maior-preco")}>Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}

export default OrdenacaoButton
