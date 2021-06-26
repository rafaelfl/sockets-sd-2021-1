const net = require("net");

// 1. criar a conexão de rede
const server = net.createServer(connectionListener);

console.log("Servidor executando na porta 3310");

// 2. escutar em uma porta de rede

server.listen(3310, "0.0.0.0");

// 3. implementar o que eu vou fazer quando eu receber uma msg

// const connectionListener = function (socket) {
// const connectionListener = (socket) => {
function connectionListener(socket) {
    socket.on("data", (data) => {
        const comando = data.toString();

        console.log(comando);
        if (comando === "NUMERO_ALEATORIO") {
            const valorAleatorio = Math.random();

            socket.write(valorAleatorio.toString());
        } else if (comando === "FINALIZA") {
            socket.end();
        } else {
            socket.write("ERRO_404");
        }
    });

    socket.on("end", () => {
        console.log("Cliente desconectado... :(");
    });    
}