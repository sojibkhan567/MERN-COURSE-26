import 'dotenv/config'
import express from 'express'
import {app} from './app.js'
import connectDB from './db/index.js'


const port = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})
.catch((err) => {
    console.log("Database connection failed!", err);
})



