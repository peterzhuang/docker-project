import healthCheck from './health.routers.js';
import notes from './notes.routers.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || 'jardinpastel.com';
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log('Cors set to address ', CORS_ADDRESS);

const corsOptions = {
    origin: CORS_ADDRESS,
}

function initRouters(app) {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(healthCheck);
    app.use(notes);
}

export default initRouters;