import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./instance";

export const get = async <TAxiosRequestConfig>(url: string, config?: AxiosRequestConfig<TAxiosRequestConfig> | undefined) => {
    const data = await axios.get(url, config)
    return data as AxiosResponse['data']
}

export default axios