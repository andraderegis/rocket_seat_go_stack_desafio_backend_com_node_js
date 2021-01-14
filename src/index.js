const serverPort = 3333;
const app = require('./app');

app.listen(serverPort, () => {
    console.info(`Server running in ${serverPort} port.`);
});

