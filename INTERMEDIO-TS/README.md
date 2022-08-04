# TypeScript-Intermedio
## Tuplas
Un array fuertemente tipado
```javascript
//Limitamos que como 1er elemento sea un string y el 2do un número y que solo haya 2 elementos
const ejemTupla: [string, number] = ['cris', 25];

//Destructurando una Tupla
const ejemTupla2: [string, number, boolean];
ejemTupla2 = ['cris', 25, true];
const [username, age] = ejemTupla2;
console.log(username);
console.log(age);
```
## Unknown type
Las variables de tipo _unknown_ mantiene el analisis estatico de codigo. Por eso se recomienda usar este en ves de _any_
```javascript
let unknownVar:unknown;
//Puede tomar cualquier valor como any
unknownVar = 'Cris';
unknownVar = 5;
unknownVar = true;
//Pero salta error si tratamos a la variable unknown que no le corresponde
```
## Never type
Funciones que nunca van a terminar, como un ciclo infinito.
Básicamente TS ayuda a detectar los nevers type.
```javascript
const withoutEnd = () => {
    while(true){
        console.log('nunca para de aprender')
    }
}
```
## Parámetros opcionales y nullish-coalescing
Los parámetros opcionales siempre se dejan al final.
```javascript
const createProduct = (
    id: string | number,
    isNew: boolean,
    stock?:number //parámetro opcional al final
) => {
    return {
        id,
        stock: stock ?? 10, //si no viene un valor le dejamos un valor (10) por defecto
        isNew: isNew ?? true
    }
}
```
Ahora usamos _??_ en remplazo de _||_ para definir un valor por default. El problema de _||_ surgía cuando enviamos los siguientes datos:
```javascript
'' === false;
0 === false;
false === false;
```
Con _??_ solo se considera _null_ y _undefined_, con eso evitamos posibles problemas con el operador _||_
## Parámetros por defecto
Esta es otra forma de dejar parametros por defecto en TS. Con esto hacemos la misma funcionalidad que hicimos en el ejemplo de arriba:
```javascript
const createProduct = (
    id: string | number,
    isNew: boolean = true,
    stock: number = 10
) => {
    return {
        id,
        stock, 
        isNew
    }
}
```
## Parámetros rest
Flexibilidad en los parámetros. Veamoslo con un ejemplo:
```javascript
enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

type User = {
    username: string;
    role: ROLES;
}

const currentUser: User = {
    username: 'cris',
    role: ROLES.CUSTOMER
}
//Esta funcion revisa el rol del usuario
const checkRole = (...roles: string[]) => {
    if(roles.includes(currentUser.role)){
        return true;
    }
    return false;
}

checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER) //true
checkRole(ROLES.ADMIN, ROLES.SELLER) //false

```
## Sobrecarga de funciones
Las sobrecargas son aserciones de tipo que hacemos a una función, especificando el tipo de valor que nos va a retornar.
En el siguiente ejemplo vemos 1ro la asercion de los posibles tipos de datos que retorna la funcion _parseData_ (estos pueden ser string, array de strings y boolean):
```javascript
//Sobrecarga ---> Asercion de tipos
function parseData(input: string): string[];
function parseData(input: string[]): string;
function parseData(input: number): boolean;
//function parseData(input: unknown): unknown; 
//Si tenemos sobrecarga con unknown o any se recomienda dejarlo de último como buena práctica.

function parseData(input: unknown): unknown {
    if(typeof input === 'string'){
        return input.split(''); //string[]
    }else if(Array.isArray(input)){
        return input.join(''); //string
    }else if(typeof input === 'number'){
        return true; //boolean
    }
};
```
Evaluemos primero si necesitamos alguna sobrecarga, no podemos caer en crear sobrecargas innecesarias
## Interfaces
Es una forma de trabajar con objetos. Un _interface_ se puede extender (_type_ no puede), es decir hacer herencias de una determinada interface y esta es la principal diferencia con _type_.
```javascript
type Size = 'S' | 'M' | 'L' | 'XL';
interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
}
```
### Extensiones de interfaces (Extender interfaces)
En este punto utilizamos el concepto de herencia. Veamoslo con un ejemplo, donde crearemos un modelo base (interface) con campos generales para que otras interfaces las pueda heredar:
```javascript
//Modelo Base
interface ModeloBase {
    id: string | number;
    createdAt: Date;
    uddatedAt: Date;
}
//Interface que va a heredar los campos de ModeloBase
//Entonces Product heredará id, createdAt, uddatedAt
interface Product extends ModeloBase {
    title: string; //campo diferencial de Product
    stock: number; //campo diferencial de Product
    size?: Size; //campo diferencial de Product
}
```
### Propiedades de solo lectura (readonly)
Cuando queremos que ciertos datos no se puedan sobreescribir utilizaremos _readonly_. Esto puede ser muy importante cuando por ejemplo el _id_, creado en la base de datos, de un objeto no se pueda modificar, hacemos lo siguiente:
```javascript
interface ModeloBase {
    readonly id: string | number;
    createdAt: Date;
    uddatedAt: Date;
}
```