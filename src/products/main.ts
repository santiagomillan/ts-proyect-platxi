import { addProduct, calcStock, products} from "./product.service"


addProduct({
title: "p1",
createdAt : new Date(1993,1,1),
stock: 12
})
addProduct({
title: "p1",
createdAt : new Date(1993,1,1),
stock: 12,
size: "XL"
})

console.log(products)
const total = calcStock()
console.log(total)
