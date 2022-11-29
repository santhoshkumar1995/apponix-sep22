 export const Myapi=async()=>{
    var data = fetch('https://fakestoreapi.com/products/category/jewelery')
    return await (await data).json()
 }