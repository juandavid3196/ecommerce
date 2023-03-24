import axios from "axios";
import { REACT_APP_API_URL, REACT_APP_API_TOKEN } from "./data";

export const makeRequest = axios.create({
    baseURL : REACT_APP_API_URL,
    headers :{
        Authorization : 'bearer ' + REACT_APP_API_TOKEN,
    },
})