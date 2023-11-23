import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = { baseURL: process.env.NEXT_PUBLIC_BASE_URL };
export const axiosInstance = axios.create(config);
