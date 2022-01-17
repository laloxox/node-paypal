import express from "express";
import morgan from "morgan";
import {PORT} from './config'
import paymentsRoutes from './routes/payment.routes'

    const app = express()

    app.use(morgan('dev'))

    app.use(paymentsRoutes)

    app.listen(PORT);
    console.log("server on port", PORT);