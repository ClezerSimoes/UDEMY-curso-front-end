type CartItem = {
    id: number,
    price: number
};

type ShoppingCart =  {
    cartItem : CartItem[]
};

const shoppingCart : ShoppingCart = {
    cartItem : [
        {id: 100, price: 200},
        {id: 200, price: 400},
        {id: 300, price: 600}
    ],
};

let calculateTotal: (sc: ShoppingCart) => number

calculateTotal = function (shoppingCart: ShoppingCart) : number{
    const total = shoppingCart.cartItem.reduce((acc, item) => acc + item.price, 0)
    return total
};

console.log(calculateTotal(shoppingCart))