import Server from "./classes/server";
import { router } from "./routes/router";
import cors from 'cors';

import bodyParser from "body-parser";

const server = new Server(5000);

//body parser
server.app.use( bodyParser.urlencoded( { extended: true } ) );
server.app.use( bodyParser.json() );

//CORS
server.app.use( cors( { origin: true, credentials: true} ));

//ROTAS
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor startado na porta ${server.port}`)
});