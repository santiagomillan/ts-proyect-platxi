(()=>{
  const login = (data:{email: string, password:number})=>{
    console.log(data.email, data.password)
  }
  // login("123@123", "123456asdsads")
  login({
    email: "123@123",
    password: 123456
  })
  type Sizes = 'S' |"M"|"L"|"XL";

  const products: any[] =[];

  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  })=>{
    products.push(data)
  }

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
})();
