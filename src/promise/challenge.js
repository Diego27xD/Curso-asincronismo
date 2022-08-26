//npm i node-fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
//fetch es una promesa

function fetchData(urlApi){
    return fetch(urlApi)
};

/* fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
    })
    .then(() => {
        console.log('Hola')
    })
    .catch(error => console.log(error)) */

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0]?.id}`)
    })
    .then(response => response.json())
    .then(producto => {
        console.log(producto.title)
        return fetchData(`${API}/categories/${producto?.category?.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(()=>console.log('Finally'))