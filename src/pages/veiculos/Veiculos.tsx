import './Veiculos.css'
import OptionFiltroContainer from "../../components/OptionFiltroContainer/OptionFiltroContainer.tsx";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import {LuFilter} from "react-icons/lu";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


const Veiculos = () => {

    const location = useLocation();
    const { marcaSelecionada } = location.state || {};

    const { data } = useGetStock();
    const { marcas, cores, cambios, carrocerias, combustiveis } = useCollects(data)
    useFiltersVehicles(data);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMarcas, setSelectedMarcas] = useState<string[]>(marcaSelecionada ? [] : ["todos"]);
    const [selectedCambios, setSelectedCambios] = useState<string[]>([]);
    const [selectedCombustivel, setSelectedCombustivel] = useState<string[]>([]);
    const [selectedCarroceria, setSelectedCarroceria] = useState<string[]>([]);
    const [precoMin, setPrecoMin] = useState<number>();
    const [precoMax, setPrecoMax] = useState<number>();

    const { filteredVehicles, setFilters } = useFiltersVehicles(data);

    function extractNumbers(input: string): number {
        return parseInt(input.replace(/\D/g, ''), 10)
    }

    const handleSelectMarca = (marcaSelect: string) => {
        setSelectedMarcas([marcaSelect])
    }

    const handlePrecoMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length<=11)
            setPrecoMin(extractNumbers(value));
    };

    const handlePrecoMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (/^\d*$/.test(value) && value.length<=11) {
            setPrecoMax(extractNumbers(value));
        }
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedColors([value]);
    };

    const handleCarroceriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedCarroceria([value]);
    };

    const handleCambioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedCambios([value]);
    };

    const handleCombustivelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedCombustivel([value]);
    };

    const handleMarcaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedMarcas([value]);
    };

    const handleClearFilters = () => {
        setSelectedMarcas(["todos"]);
        setSelectedColors(["todos"]);
        setSelectedCambios(["todos"]);
        setSelectedCarroceria(["todos"]);
        setSelectedCombustivel(["todos"]);
    }

    useEffect(() => {
        if (selectedMarcas.length<1)
            setSelectedMarcas([marcaSelecionada])
        setFilters(prevFilters => ({
            ...prevFilters,
            cores: selectedColors,
            marcas: selectedMarcas,
            precoMax: precoMax,
            precoMin: precoMin,
            cambio: selectedCambios,
            carroceria: selectedCarroceria,
            combustivel: selectedCombustivel,
        }));
    }, [precoMin, precoMax, selectedColors, selectedMarcas, setFilters, selectedCarroceria, selectedCambios, selectedCombustivel]);

    return (
        <div className="veiculos row" id="veiculos">
            <div className="filtro-div-veiculos col-3">
                <div className="menu-filtros-div-veiculos">
                    <h1 className="col-12">Filtrar</h1>
                    <div className="d-flex col-12">
                        <div className="col-6 div-clear-filtro-button">
                            <button className="clear-filtro-button" onClick={handleClearFilters}>Limpar Filtros</button>
                        </div>
                        <div className="col-6 div-filtro-button">
                            <button className="filtro-button">Filtrar <LuFilter className="icon-button-filtro"/></button>
                        </div>
                    </div>
                </div>
                <div className="menu-preco-filtros-div-veiculos">
                    <h1>Preço</h1>
                    <div className="div-input-preco">
                        <label htmlFor="de">De</label>
                        <input type="number" placeholder="R$0,00" id="de" value={precoMin} min="0" max={precoMax} step="10000" onChange={handlePrecoMinChange}/>
                    </div>
                    <div className="div-input-preco">
                        <label htmlFor="ate">Até</label>
                        <input type="number" placeholder="R$1.000.000,00" id="ate" value={precoMax} min={precoMin} max="5000000" step="10000" onChange={handlePrecoMaxChange}/>
                    </div>
                </div>
                <OptionFiltroContainer title="Marcas" group={"marcas"} value={marcas} handle={handleMarcaChange} selected={selectedMarcas} todos={true}/>
                <OptionFiltroContainer title="Cores" group={"cores"} value={cores} handle={handleColorChange} selected={selectedColors} todos={true}/>
                <OptionFiltroContainer title="Câmbio" group={"cambio"} value={cambios} handle={handleCambioChange} selected={selectedCambios} todos={true}/>
                <OptionFiltroContainer title="Combustível" group={"combustivel"} value={combustiveis} handle={handleCombustivelChange} selected={selectedCombustivel} todos={true}/>
                <OptionFiltroContainer title="Carroceria" group={"carroceria"} value={carrocerias} handle={handleCarroceriaChange} selected={selectedCarroceria} todos={true}/>
            </div>
            <div className="cards-div-veiculos col-9">
                <div className="marcas-cards-div-veiculos">
                    <CarouselCategorias marcas={marcas} handleSelectedMarca={handleSelectMarca}/>
                </div>
                {filteredVehicles.length === 0 ?
                    <div className="cards-itens-div-none-veiculos">
                        <h1 className="col-12">Veículos em destaque</h1>
                        <h2>Nenhum veículo foi encontrado :(</h2>
                    </div> :
                    <div className="cards-itens-div-veiculos row">
                    <h1 className="col-12">Veículos em destaque</h1>
                        {filteredVehicles.length === 0 ? <h2>Nada encontrado</h2> : filteredVehicles?.map(value =>
                            <CardVeiculoEstoque veiculo={value} key={value.codigo}/>
                        )}
                    </div>
                }
            </div>
        </div>





    )
}

export default Veiculos
