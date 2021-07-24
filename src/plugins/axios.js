import axios from "axios";
import {API_URL, API_KEY} from "../config/env";


const Axios = axios.create({
    baseURL: API_URL || 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "x-api-key": API_KEY
    },
});

export default Axios;