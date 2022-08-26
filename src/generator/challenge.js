import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function getDataOfApi(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}


async function* sendUrl(urlApi){
    try{
        const products = await getDataOfApi(`${urlApi}/products`);
        yield console.log(products);

        const product = await getDataOfApi(`${urlApi}/products/${products[0].id}`)
        yield console.log(product.title)

        const category = await getDataOfApi(`${urlApi}/categories/${product.category.id}`)
        yield console.log(category.name)
    }catch(error){
        console.error(error)
    }
    
}

const valor = sendUrl(API)
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());