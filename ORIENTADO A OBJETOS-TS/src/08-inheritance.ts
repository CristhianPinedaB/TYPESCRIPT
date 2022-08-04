export class Animal {
    constructor(public name: string){}

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }
}

export class Dog extends Animal {

    constructor(
        name: string, //no le ponemos public porque viene de la clase padre Animal
        public owner: string
    ){
        //Llamamos al contructor del padre con super
        super(name); //A super simplemente pasamos las propiedades heredadas
    }

    woof(times: number): void{
        for (let index = 0; index < times; index++) {
            console.log('woof!');
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Cris');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);


