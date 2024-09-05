import createItem from "./services/item.js";
import  *  as cartService from "./services/cart.js";

// Carrinho
const cart = [];
// Lista de desejos
const wishList = [];


console.log("\n-------Bem vindo ao seu carrinho de compras--------\n");

// Declaração e criação dos itens
const item1 = await createItem("furadeira", 200, 2)
const item2 = await createItem("furadeira bosch", 300, 2)

//adição de itens no carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

//removendo 1 item por vez
await cartService.removeItem(cart, item2);
await cartService.removeItem(cart, item1);

//lista e descrição do carrinho
await cartService.displayCart(cart);

// deletar item do carrinho
//await cartService.deleteItem(cart, item2.name);

//valor total do carrinho
await cartService.calculateTotal(cart);


