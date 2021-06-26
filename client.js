const net = require("net");

const socket = net.Socket();

socket.connect(3310, "127.0.0.1", clientConnect);

function clientConnect() {
    console.log("Conectando no servidor...");

    socket.on("data", (data) => {
        console.log("O comando enviado pelo servidor foi: " + data.toString());
    });

    socket.write("NUMERO_ALEATORIO");

    socket.write("FINALIZA");
}