import { useCallback, useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import OptionFiltroContainer from "../../components/OptionFiltroContainer/OptionFiltroContainer.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import { useGetStock } from "../../hooks/useGetStock.tsx";
import { Filters } from "../../interfaces/Filters.ts";
import { Vehicle } from "../../interfaces/Vehicle.ts";
import './Veiculos.css';


const Veiculos = () => {

    const { data, isLoading } = useGetStock();
    const { marcas, cores, cambios, carrocerias, combustiveis } = useCollects(data)

    const [selectedColors, setSelectedColors] = useState<string>('todos');
    const [selectedMarcas, setSelectedMarcas] = useState<string>('todos');
    const [selectedCambios, setSelectedCambios] = useState<string>('todos');
    const [selectedCombustivel, setSelectedCombustivel] = useState<string>('todos');
    const [selectedCarroceria, setSelectedCarroceria] = useState<string>('todos');
    const [precoMin, setPrecoMin] = useState<string>('');
    const [precoMax, setPrecoMax] = useState<string>('');

    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [filters, setFilters] = useState<Filters>({});

    const updateFilter = useCallback((key: keyof Filters, value: string, setValue: (value: string) => void) => {
        setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
        setValue(value)
    }, [])

    const applyFilter = (ordenation: string) => {
        let result = data!.filter((vehicle) => {
            return (
                (filters.cor === undefined || filters.cor === "todos" || vehicle.cor.toLowerCase() === filters.cor) &&
                (filters.marca === undefined || filters.marca === "todos" || vehicle.marca.toLowerCase() === filters.marca) &&
                (filters.combustivel === undefined || filters.combustivel === "todos" || vehicle.combustivel.toLowerCase() === filters.combustivel) &&
                (filters.carroceria === undefined || filters.carroceria === "todos" || vehicle.carroceria.toLowerCase() === filters.carroceria) &&
                (filters.cambio === undefined || filters.cambio === "todos" || vehicle.cambio.toLowerCase() === filters.cambio) &&
                (filters.precoMax === undefined || filters.precoMax === "" || extractNumbers(vehicle.precoVenda) < extractNumbers(filters.precoMax)) &&
                (filters.precoMin === undefined || filters.precoMin === "" || extractNumbers(vehicle.precoVenda) > extractNumbers(filters.precoMin))
            );
        });
        result = sortVehicles(result, ordenation !== "" ? ordenation : filters.ordenacao);
        setFilteredVehicles(result);
    }

    const sortVehicles = (vehicles: Vehicle[], typeOrdenacao: string | undefined) => {
        let result = vehicles
        // if (typeOrdenacao === "relevancia")
        //     result = result.sort((a, b) => {
        //         return extractNumbers(a.precoVenda) - extractNumbers(b.precoVenda);
        //     })
        if (typeOrdenacao === "marca-modelo")
            result = result.sort((a, b) =>
                a.marca === b.marca
                    ? (a.modelo < b.modelo ? -1 : a.modelo > b.modelo ? 1 : 0)
                    : (a.marca < b.marca ? -1 : 1)
            )
        if (typeOrdenacao === "ano-mais-novo")
            result = result.sort((a, b) => extractNumbers(b.anoFabricacao) - extractNumbers(a.anoFabricacao))
        if (typeOrdenacao === "menor-km")
            result = result.sort((a, b) => extractNumbers(a.km) - extractNumbers(b.km))
        if (typeOrdenacao === "menor-preco")
            result = result.sort((a, b) => extractNumbers(a.precoVenda) - extractNumbers(b.precoVenda))
        if (typeOrdenacao === "maior-preco")
            result = result.sort((a, b) => extractNumbers(b.precoVenda) - extractNumbers(a.precoVenda))
        return result;
    }

    function extractNumbers(input: string): number {
        return parseFloat(input.replace(/\./g, '').replace(',', '.'))
    }

    const handleOrdenacao = (value: string) => {
        value
    }

    const handleSelectMarca = (value: string) => {
        updateFilter('marca', value, setSelectedMarcas)
    }

    const handleSelectCor = (value: string) => {
        updateFilter('cor', value, setSelectedColors)
    }

    const handleSelectCambio = (value: string) => {
        updateFilter('cambio', value, setSelectedCambios)
    }

    const handleSelectCombustivel = (value: string) => {
        updateFilter('combustivel', value, setSelectedCombustivel)
    }

    const handleSelectCarroceria = (value: string) => {
        updateFilter('carroceria', value, setSelectedCarroceria)
    }

    const handlePrecoMinChange = (value: string) => {
        if (/^\d*$/.test(value) && value.length <= 11)
            updateFilter('precoMin', value, setPrecoMin)
    };

    const handlePrecoMaxChange = (value: string) => {
        if (/^\d*$/.test(value) && value.length <= 11)
            updateFilter('precoMax', value, setPrecoMax)
    };

    const handleUpdateClearFilters = () => {
        updateFilter('marca', "todos", setSelectedMarcas)
        updateFilter('cor', "todos", setSelectedColors)
        updateFilter('cambio', "todos", setSelectedCambios)
        updateFilter('carroceria', "todos", setSelectedCarroceria)
        updateFilter('combustivel', "todos", setSelectedCombustivel)
        updateFilter('precoMax', "", handlePrecoMinChange)
        updateFilter('precoMin', "", handlePrecoMaxChange)
        updateFilter('ordenacao', "relevancia", handleOrdenacao)
    }

    useEffect(() => {
        if (data)
            setFilteredVehicles(data);
    }, [data]);

    return (
        <div className="veiculos row" id="veiculos">
            <div className="filtro-div-veiculos col-3">
                <div className="menu-filtros-div-veiculos">
                    <h1 className="col-12">Filtrar</h1>
                    <div className="d-flex col-12">
                        <div className="col-6 div-clear-filtro-button">
                            <button className="clear-filtro-button" onClick={() => {
                                handleUpdateClearFilters()
                            }}>Limpar Filtros
                            </button>
                        </div>
                        <div className="col-6 div-filtro-button">
                            <button className="filtro-button" onClick={() => applyFilter("")}>Filtrar <LuFilter
                                className="icon-button-filtro" /></button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-toggle button-ordenar" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Ordenar Por
                        </button>
                        <ul className="dropdown-menu button-ordenar-menu">
                            <li><a className="dropdown-item" href="#" onClick={() => applyFilter("maior-preco")}>Maior
                                Preço</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => applyFilter("menor-preco")}>Menor
                                Preço</a></li>
                            <li><a className="dropdown-item" href="#"
                                onClick={() => applyFilter("marca-modelo")}>Marca/Modelo</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => applyFilter("ano-mais-novo")}>Ano
                                Mais Novo</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => applyFilter("menor-km")}>Menor
                                KM</a></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-preco-filtros-div-veiculos">
                    <h1>Preço</h1>
                    <div className="div-input-preco">
                        <label htmlFor="de">De</label>
                        <input type="number" placeholder="R$0,00" id="de" value={precoMin} min="0" max={precoMax}
                            step="10000" onChange={(e) => handlePrecoMinChange(e.target.value)} />
                    </div>
                    <div className="div-input-preco">
                        <label htmlFor="ate">Até</label>
                        <input type="number" placeholder="R$1.000.000,00" id="ate" value={precoMax} min={precoMin}
                            max="5000000" step="10000" onChange={(e) => handlePrecoMaxChange(e.target.value)} />
                    </div>
                </div>
                <OptionFiltroContainer title="Marcas" group={"marca"} value={marcas} handle={(e) => handleSelectMarca(e.target.value)}
                    selected={selectedMarcas} todos={true} />
                <OptionFiltroContainer title="Cores" group={"cor"} value={cores} handle={(e) => handleSelectCor(e.target.value)}
                    selected={selectedColors} todos={true} />
                <OptionFiltroContainer title="Câmbio" group={"cambio"} value={cambios} handle={(e) => handleSelectCambio(e.target.value)}
                    selected={selectedCambios} todos={true} />
                <OptionFiltroContainer title="Combustível" group={"combustivel"} value={combustiveis}
                    handle={(e) => handleSelectCombustivel(e.target.value)} selected={selectedCombustivel} todos={true} />
                <OptionFiltroContainer title="Carroceria" group={"carroceria"} value={carrocerias}
                    handle={(e) => handleSelectCarroceria(e.target.value)} selected={selectedCarroceria} todos={true} />
                <div className="col-12 div-filtro-button">
                    <button className="filtro-button" onClick={() => applyFilter("")}>Filtrar <LuFilter
                        className="icon-button-filtro" /></button>
                </div>
            </div>
            <div className="cards-div-veiculos col-9">
                {filteredVehicles.length === 0 ?
                    (isLoading ?
                        <div className="spinner-estoque-carros-div">
                            <div className="spinner-border spinner-estoque-carros" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                        <div className="cards-itens-div-none-veiculos">
                            <h1 className="col-12">Veículos em destaque</h1>
                            <h2>Nenhum veículo foi encontrado :(</h2>
                        </div>) :
                    <div className="cards-itens-div-veiculos row">
                        <CarouselCategorias handleSelectedMarca={handleSelectMarca} marcas={marcas} />
                        <h1 className="col-12">Veículos em destaque</h1>
                        {filteredVehicles.length === 0 ? <h2>Nada encontrado</h2> : filteredVehicles?.map(value =>
                            <CardVeiculoEstoque veiculo={value} key={value.codigo} />
                        )}
                    </div>
                }
            </div>
        </div>





    )
}

export default Veiculos
