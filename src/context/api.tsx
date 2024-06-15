import axios from "axios";
import { env } from "process";

export const axiosInstance = axios.create({
    baseURL: "https://topup.seerbitapigateway.com/api", // Replace with your API's base URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export const getAuthToken = async () => {
    return await axiosInstance.post("/auth", {
        username: process.env.USERNAME,
        password: process.env.PASSWORD

    })
}


export const airtimeTopUp = (amount: number, phone: string) => {

}
export const dataTopUp = (amount: number, phone: string) => {

}

