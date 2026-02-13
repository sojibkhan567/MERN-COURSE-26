import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// cors middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// built-in middleware
app.use(express.json({limit: "100kb"}));
app.use(express.urlencoded({extended: true, limit: "100kb"}));
app.use(express.static("public"));
app.use(cookieParser);

export { app }