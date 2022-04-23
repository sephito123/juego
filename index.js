"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./clases/server"));
var environment_1 = require("./global/environment");
var router_1 = __importDefault(require("./routes/router"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var server = server_1.default.instance;
//configurar cabeceras http
server.app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With, Content-Type,Accept,Access-Allow-Request-Mehodo');
	res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
	next();
});
//BodyParser
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
// CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Rutas de servicios
server.app.use('/', router_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puesto ".concat(environment_1.SERVER_PORT));
});
