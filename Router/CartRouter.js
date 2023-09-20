import { Router } from "express";
const router = Router()

router.get("/:cid", async (req, res) => {

    try {

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
