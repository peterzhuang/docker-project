import mongoose from 'mongoose';

export const testResponse = (req, res, next) => {
    res.send("Hot reload response with nodemon!");
}

export const ping = (req, res, next) => {
    mongoose.connection.db.admin().ping((error, result) => {
        if (error || !result) {
            res.send({ 
                message: `Ping fail with error: ${error}`,
                status: 'fail',
            });
        }
        res.send({
            message: `Connection with mongo is up: ${result}`,
            status: 'success',
        });
    });
}