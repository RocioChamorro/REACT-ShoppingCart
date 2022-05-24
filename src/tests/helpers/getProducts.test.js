import { PRODUCTS } from "../../data/products";
import { getProducts } from "../../helpers/getProducts";

describe('Prueba con promesas', () => {
    test('getProducts debe retornar el listado de los productos', (done) => {

        getProducts().then(response=>{
            expect( response.products[0]).toBe(PRODUCTS.products[0]);
            done();

        });
    })
})
