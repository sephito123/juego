"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = void 0;
exports.desconectar = function (cliente) {
    cliente.on('disconnect', function () {
        console.log('Cliente desconectado');
    });
};
