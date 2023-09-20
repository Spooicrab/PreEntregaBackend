import { Router } from "express";
import { CartManager } from "../CartManager.js";
const router = Router()

router.get("/", async (req, res) => {

    try {
        const Cart = await CartManager.GetCart()
        res.status(200).json(Cart)
    } catch (error) {
        res.status(500).json({ message: error });
    }


})

router.post("/", async (req, res) => {

    try {

    } catch (error) {
        res.status(500).json({ message: error });
    }


})

router.post("/:cid/product/:pid", async (req, res) => {

    try {

    } catch (error) {
        res.status(500).json({ message: error });
    }


})


export default router
