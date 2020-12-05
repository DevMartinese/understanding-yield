function* serialNumber(){
    yield 1;
    yield 10;
    yield 100;
    yield 1000;
    yield 10000;
};

const generatorSerialNumber = serialNumber();
console.log(generatorSerialNumber.next());
console.log(generatorSerialNumber.next());
console.log(generatorSerialNumber.next());
console.log(generatorSerialNumber.next());
console.log(generatorSerialNumber.next());

function* helloWorld() {
    yield 'Hola';
    yield 'Mundo';
}

function* serialNumberTwo(i){
    yield i;
    yield i + 5;
    yield i + 10;
    yield* helloWorld();
    yield i + 15;
    yield i + 20;
};

const generatorSerialNumberTwo = serialNumberTwo(50);
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());
console.log(generatorSerialNumberTwo.next());