import fs from 'fs'

class GestorCarrito {

    constructor(path) {
        this.path = path;
    }

    async GetCart() {
        try {
            const ArchivoCarrito = await fs.promises.readFile(this.path, "utf-8");
            const ListaCarritos = JSON.parse(ArchivoCarrito);
            return fs.existsSync(this.path) ? ListaCarritos : []
        } catch (error) {
            return error;
        }
    }

    async GetCartByid(ID) {
        try {
            const Carritos = await this.GetCart({})
            const Cart = Carritos.find((c) => c.id === ID);
            return Cart
        } catch (error) {
            return error
        }
    }

}
// async function test() {

//     const ListaCarritos = new GestorCarrito("Cart.json");
//     let Prueba = await ListaCarritos.GetCart()
//     console.log(Prueba)

// }
// test()
export const CartManager = new GestorCarrito("Cart.json");