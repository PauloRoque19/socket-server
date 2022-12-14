import express from 'express';
import { SERVER_PORT } from '../global/environment';

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(port: number){
        this.app = express();
        this.port = SERVER_PORT;
    }

    public start(callback: () => void){
        this.app.listen(this.port, callback);
    }

}