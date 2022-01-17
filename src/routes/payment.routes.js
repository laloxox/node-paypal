import { Router } from "express";

import {createOrder, 
        captureOrder, 
        cancelOrder
    } from '../controllers/payment.controller'

const router = Router();

router.get("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/canceled-order", cancelOrder);



export default router;