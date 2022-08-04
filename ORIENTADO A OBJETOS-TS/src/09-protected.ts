export abstract class Animal {
    //Con protected hacemos que esa propiedad no se pueda modificar desde afuera
    //Además se va a poder heredar (esa es la diferencia con private)
    constructor(protected name: string){}

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }

    protected doSomething(){
        console.log('dooo!');
    }
}

export class Dog extends Animal {

    constructor(
        name: string, //no le ponemos public porque viene de la clase padre Animal
        public owner: string
    ){
        super(name); //A super simplemente pasamos las propiedades heredadas
    }

    woof(times: number): void{
        for (let index = 0; index < times; index++) {
            console.log('woof!');
        }
        this.doSomething();
    }

    move(){
        console.log('moving as a dog'); //1ero se ejecutará este mov perteneciente a Dog
        super.move(); // y luego este se ejecutará, el cual es el metodo heredado del padre (Animal)
    }
}

const cheis = new Dog('cheis', 'Cris');
console.log(cheis.greeting());
cheis.woof(5);
cheis.move();// 1ro--> 'moving as a dog' | 2do---->'Moving along!'
//cheis.name='otro nombre'
