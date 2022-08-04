import axios from "axios";

import { Product } from "./models/product.model";

(async()=>{
    //de esta forma tipamos la respuesta de axios
    async function getProducts(){
        const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
        //const data = rta.data as Product[]; //de esta manera tambien se forza el tipado
        return data;
    }

   
    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));



})();

// > npx ts-node src/app/01-main.ts