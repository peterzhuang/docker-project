import express from 'express';
import mongoose from 'mongoose';
import initRouters from './routers/index.js';

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(cors(corsOptions));

initRouters(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})