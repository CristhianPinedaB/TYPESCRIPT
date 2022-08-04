import {Animal, Dog} from './09-protected';

//En nuestra clase Animal le agregamos abstract (lo convertimos en una clase abstracta) para que de ella no se pueda
//instanciar hijos, sino que a partir de las clases especificas que heredan
//del padre, se pueda instanciar (o sea del padre no se instancia, pero de los hijos sí)

//const animal = new Animal('elite'); //error
//animal.greeting();

const cheis = new Dog('cheis', 'cris');
cheis.greeting();