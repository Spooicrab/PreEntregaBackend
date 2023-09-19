import express, { Router } from 'express';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("api/products", )
app.use("api/cart", )



app.listen(8080, () => {
    console.log("sigo andando");
});
