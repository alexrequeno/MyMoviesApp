import axios from 'axios';
import {apiConf} from '../config/api';

const movieApi = axios.create({
    baseURL: apiConf.moviesUrl,
    params: {
        api_key: apiConf.movieApiKey,
        language: apiConf.movieApiLang
    }
});

export default movieApi;