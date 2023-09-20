import fs from 'fs'

class GestorCarrito {

    constructor(path) {
        this.path = path;
    }

    async GetCart() {
        try {
            const ArchivoCarrito = await fs.promises.readFile(this.path, "utf-8");
            ListaCarritos = Json.parse(ArchivoCarrito);
            return fs.existsSync(this.path) ? ListaCarritos : []
        } catch (error) {
            return error;
        }
    }



}

test ()
export const CartManager = new GestorCarrito("Cart.json");