import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className="title-div-nav">
                <h1 className="title">Logo</h1>
                <input className='search-nav' type="text" placeholder="Pesquise por veículo ou marca..." />
            </div>
            <div className='optionals-div-nav'>
                <button className='active-button-nav button-nav'>
                    <p className='text-active-button-nav text-button-nav'>Início</p>
                </button>
                <button className='deactivated-button-nav button-nav'>
                    <p className='text-deactivated-button-nav text-button-nav'>Início</p>
                </button>
                <button className='deactivated-button-nav button-nav'>
                    <p className='text-deactivated-button-nav text-button-nav'>Início</p>
                </button>
                <button className='deactivated-button-nav button-nav'>
                    <p className='text-deactivated-button-nav text-button-nav'>Início</p>
                </button>
                <button className='deactivated-button-nav button-nav'>
                    <p className='text-deactivated-button-nav text-button-nav'>Início</p>
                </button>
            </div>
        </nav>
    )
}

export default NavBar