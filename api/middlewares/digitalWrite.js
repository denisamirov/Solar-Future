const net = require('net')

const digitalWrite = (req, res, next) => {
    console.log(req.body)
    const HOST = 'host.docker.internal';
    const PORT = 7070;
    try {
        const client = new net.Socket();
        console.log(client, 'создал соединение')
        client.connect(PORT, HOST, function () {
            console.log('Client connected to: ' + HOST + ':' + PORT);
            client.write('Hello World!');
        })
    }
    catch (err) {
        console.log(err)
    }

    next();
}

module.exports = digitalWrite;