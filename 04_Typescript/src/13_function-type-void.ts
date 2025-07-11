//TODO CartItem

type CartItem = {
    id: number,
    price: number
};

// TODO ShoppingCart

type ShoppingCart =  {
    cartItem : CartItem[]
};

// TODO criar variavel do tipo ShoppingCart contendo CartItem

const shoppingCart : ShoppingCart = {
    cartItem : [
        {id: 100, price: 200},
        {id: 200, price: 400},
        {id: 300, price: 600}
    ],
};

// TODO função do tipo void para somar os valores dos itens

export function calculateTotal(shoppingCart: ShoppingCart) : void{
    const total = shoppingCart.cartItem.reduce((acc, item) => acc + item.price, 0)
    console.log(`Total do carrinho: R$ ${total}`)
};

calculateTotal(shoppingCart)