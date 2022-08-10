import dotenv from 'dotenv';
import {createApp} from "./app";

dotenv.config({path: '.env'});

const { ENVIRONMENT, PORT } = process.env;

async function serverInit() {
    const app = createApp();

    const server = app.listen(PORT, () => {
        console.log(`SERVER STARTED ON PORT: ${PORT}`);
        console.log(`SERVER ENVIRONMENT: ${ENVIRONMENT}`);
    });

    process.on('SIGINT', () => {
        console.log('server_interrupt');
        server.close();
    });
    process.on('SIGTERM', () => {
        console.log('server_terminate');
        server.close();
    });
};

serverInit().catch(e => {
    console.log(e);
    process.exit(100);
});
