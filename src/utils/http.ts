import axios, { AxiosInstance } from "axios";
import {baseURL} from "@/config";

class HttpRequest{
    constructor(private baseUrl:string = baseURL){};

    private getInsideConfig () {
        const config = {
          baseURL: this.baseUrl,
          headers: {
            //
          }
        }
        return config
      }
    private interceptors(instance:AxiosInstance,url:string){
        instance.interceptors.request.use(config=>{
            return config;
        },error =>{
            return Promise.reject(error);
        })
        instance.interceptors.response.use(res => {
            return res;
        },error=>{
            return Promise.reject(error);
        })

    }

    public request(options:any):any{
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(),options);
        this.interceptors(instance,options.url);
        return instance(options);
    }

;}


export default HttpRequest;