import {useEffect, useState} from "react";
import {Vehicle} from "../interfaces/Vehicle.ts";

const useCollects = (vehicles: Vehicle[] = []) => {
    const [marcas] = useState<string[]>([]);
    const [cores] = useState<string[]>([]);

    const collectCores = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!cores.includes(vehicle.cor.toLowerCase()))
                cores.push(vehicle.cor.toLowerCase());
        })
    }

    const collectMarcas = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!marcas.includes(vehicle.marca.toLowerCase()))
                marcas.push(vehicle.marca.toLowerCase());
        })
    }

    useEffect(() => {
        collectCores(vehicles)
        collectMarcas(vehicles)
    }, [vehicles])

    return {
        cores,
        marcas
    }
}

export default useCollects
