//Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió 
//o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.
//LAS PROMESAS TIENEN TRES ESTADOS: PENDIENTE, CUMPLIDO y RECHAZADO

//CONSTRUCCION DE UNA PROMESA
const promise = new Promise(function(resolve, reject){
    resolve('hey!');
})

//ejemplo de contar vacas
const cows = 15; //valor inicial de vacas

const countCows = new Promise(function(resolve, reject){
//solo si el número de vacas supera 10, se llama al resolve
//de lo contrario: se llama a reject
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject("There is no cows on the farm");
    }  
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows.then((result) => {
console.log(result);
}).catch((error) => {
console.log(error);
}).finally(() => console.log('Finally'));
//se usan arrow function () =>