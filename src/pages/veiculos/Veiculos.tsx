import './Veiculos.css'
import OptionFiltroContainer from "../../components/OptionFiltroContainer/OptionFiltroContainer.tsx";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import {LuFilter} from "react-icons/lu";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import {useEffect, useState} from "react";
import {Vehicle} from "../../interfaces/Vehicle.ts";


const Veiculos = () => {

    const { data } = useGetStock();
    const { marcas, cores } = useCollects(data)
    useFiltersVehicles(data);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMarcas, setSelectedMarcas] = useState<string[]>([]);
    const { filteredVehicles, setFilters } = useFiltersVehicles(data);

    // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFilters(prevFilters => ({
    //         ...prevFilters,
    //         [name]: value,
    //     }));
    // };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedColors([value]);
    };

    const handleMarcaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedMarcas([value]);
    };

    useEffect(() => {
        setFilters(prevFilters => ({
            ...prevFilters,
            cores: selectedColors,
            marcas: selectedMarcas,
        }));
    }, [selectedColors, selectedMarcas, setFilters]);

    const getPrimeiraFotoUri = (veiculo: Vehicle) => {
        return veiculo.fotos.foto[0]?.uri
    }

    return (
        <div className="veiculos row">
            <div className="filtro-div-veiculos col-3">
                <div className="menu-filtros-div-veiculos">
                    <h1>Filtrar</h1>
                    <div className="d-flex col-7">
                        <div className="col-6 div-clear-filtro-button">
                            <button className="clear-filtro-button">Limpar Filtros</button>
                        </div>
                        <div className="col-6 div-filtro-button">
                            <button className="filtro-button">Filtrar <LuFilter className="icon-button-filtro"/></button>
                        </div>
                    </div>
                </div>
                <div className="menu-preco-filtros-div-veiculos">
                    <h1>Preço</h1>
                    <div>
                        <label htmlFor="de">De</label>
                        <input type="text" placeholder="R$0,00" id="de"/>
                    </div>
                    <div>
                        <label htmlFor="ate">Até</label>
                        <input type="text" placeholder="R$1.000.000,00" id="ate"/>
                    </div>
                </div>
                <OptionFiltroContainer title="Marcas" group={"marcas"} value={marcas} handle={handleMarcaChange}/>
                <OptionFiltroContainer title="Cores" group={"cores"} value={cores} handle={handleColorChange}/>

            </div>
            <div className="cards-div-veiculos col-9">
                <div className="marcas-cards-div-veiculos">
                    <CarouselCategorias marcas={marcas} padding={0}/>
                </div>
                <div className="cards-itens-div-veiculos row">
                    <h1 className="col-12">Veículos em destaque</h1>
                    {filteredVehicles?.map(value =>
                        <CardVeiculoEstoque image={getPrimeiraFotoUri(value)} title={value.modelo} motor={value.versao} preco={value.precoVenda} ano={value.anoModelo} km={value.km} key={value.codigo}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Veiculos
