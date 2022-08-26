//Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. 
//La palabra reservada yield se usa para pausar y reanudar una función generadora.

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
//CONTROLAMOS LA ITERACIÒN 
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(['oscar','ana','lucia','juan']);
//console.log(it.next())
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)