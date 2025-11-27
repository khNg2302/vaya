import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./instance";

export const getApi = async <TAxiosRequestConfig>(url: string, config?: AxiosRequestConfig<TAxiosRequestConfig> | undefined) => {
    const data = await axios.get(url, config)
    return data as AxiosResponse['data']
}

export const deleteApi = async <TAxiosRequestConfig>(url: string, config?: AxiosRequestConfig<TAxiosRequestConfig> | undefined) => {
    const data = await axios.delete(url, config)
    return data as AxiosResponse['data']
}

export default axios