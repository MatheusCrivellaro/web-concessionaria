import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className="title-div-nav">
                <h1 className="title">Logo</h1>
                <input className='search-nav' type="text" placeholder="Pesquise por veículo ou marca..." />
            </div>
        </nav>
    )
}

export default NavBar