import axios from "axios";
import {apiConf} from '../config/api';

const authApi = axios.create({
    baseURL: apiConf.authUrl,
});

export default authApi;