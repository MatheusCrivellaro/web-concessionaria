import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://matheuscrivellaro.online"

const fetchStock = async (): AxiosPromise<Vehicle[]> => {
    return axios.get(API_URL + '/stock/integracaoapi@autonitro.com.br/Autonitro@2023/31897305000171')
}

export function useGetStock() {
    const query = useQuery({
        queryFn: fetchStock,
        queryKey: ['get-stock']
    })

    return {
        ...query,
        data: query.data?.data
    }
}
