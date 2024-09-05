
// adicionar item no carrinho
async function addItem(userCart, item){
    // push -> 
    userCart.push(item)
};

// deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
};

// remover um item
async function removeItem(userCart, item){

    //encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //Caso não encontrar o item no indice
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    //Se item maior que remover 1 item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    // item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }

};

async function displayCart(userCart){
    console.log("Lista de compras do seu carrinho:");
    userCart.forEach((item, index) =>{
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity} Unidade | Subtotal - R$ ${item.subtotal()}` );
    });
}

// calcular o total
async function calculateTotal (userCart){
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`\nTotal R$:${result}`);
};

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };