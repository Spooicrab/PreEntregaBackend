import express from 'express';
import ProductRouter from './Router/ProductRouter.js'
import CartRouter from './Router/CartRouter.js'
import { __dirname } from "./utils.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/Public'))


app.use("/api/products", ProductRouter)
app.use("/api/carts", CartRouter)


app.listen(8080, () => {
    console.log("sigo andando");
});
