import axios from "axios";
import {apiConf} from '../config/api';
//import storage from "../config/storage";

const authApi = axios.create({
    baseURL: apiConf.authUrl,
});

/* authApi.interceptors.request.use(

    async(config) => {
        const token =await storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            // any exception including data not found
            // goes to catch()
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                // TODO;
                break;
                case 'ExpiredError':
                // TODO
                break;
            }
        })
        if (token) {
            config.header['x-token'] = token;
        }
        return config;
    }
); */

export default authApi;