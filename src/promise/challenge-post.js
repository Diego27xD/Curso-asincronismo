import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

//crear un nuevo elemento

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data) //TRANSFORMAMOS EN UN OBJETO JSON

    });
    return response;
}

const data = {
    "title": "The best new Product Cource",
    "price": 1045,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`,data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))


//Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });