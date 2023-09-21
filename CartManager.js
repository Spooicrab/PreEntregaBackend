import fs from 'fs'

class GestorCarrito {

    constructor(path) {
        this.path = path;
    }

    async GetCarts() {
        try {
            if (!fs.existsSync(this.path)) {
                const Carts = []
                await fs.promises.writeFile(this.path, JSON.stringify(Carts));
                return Carts
            }
            const Carts = JSON.parse(await fs.promises.readFile(this.path));
            return Carts;
        } catch (error) {
            return error;
        }
    }

    async GetCartByid(ID) {
        try {
            const Carritos = await this.GetCarts()
            const Cart = Carritos.find((c) => c.id === ID);
            return Cart
        } catch (error) {
            return error
        }
    }

    async AddCart() {
        try {
            const Carritos = await this.GetCarts();
            let id = Carritos.length ? Carritos[Carritos.length - 1].id + 1 : 1;
            const NuevoCarrito = { id };
            Carritos.push(NuevoCarrito);
            await fs.promises.writeFile(this.path, JSON.stringify(Carritos));
        } catch (error) {
            return error;
        }
    }
}

// async function test() {
//     const ListaCarritos = new GestorCarrito("Cart.json");
//     let VerPrueba = await ListaCarritos.GetCartByid(1);
//     // let Prueba = await ListaCarritos.CrearCarrito();
//     console.log(VerPrueba)
//     // console.log(Prueba)
// }
// test()
export const CartManager = new GestorCarrito("Cart.json");