# TypeScript - Fundamentos
Typescript = Analisis de codigo estático + Javascript (todas sus versiones)

### Compilador de TS
Este compilador lo que realmente hace es transpilar, pues ni el navegador ni Node.js (a abril de 2022) pueden leer nativamente archivos TypeScript, por lo que realiza un proceso de traducción en la que su código lo convierte a JavaScript.

```javascript
//En la terminal puedes compilar de la siguiente forma:
npx tsc src/ejemplo.ts --target es6
//Para decirle en qué carpeta crear el archivo JS, así:
npx tsc src/ejemplo.ts --target es6 --outDir nombrecarpeta
```

### Configurando el TSConfig.json
Con este comando creamos el archivo TSConfig.json:
```javascript
npx tsc --init
```
Luego de eso, configuramos el TSConfig.json a nuestra conveniencia, como decirle a en capeta quieres que vayan las compilaciones JS cuando hagas npx tsc, etc.
  
Para dejar escuchando a cambios en los archivos TS y lo compile automaticamente solo guardando:
```javascript
npx tsc --watch
```
## Tipado en TS
El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como _type annotation_, con esto evitamos mezclar distintos tipos de datos.
```javascript
const productPrice: number = 12
let myName:string = "Victoria";
```
### Inferencia de Tipos (deja que TS nos ayude)
A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:
```javascript
let myName = "Victoria";
let productPrice = 123;

myName=12 //---> ERROR
myName="Cris" //---> CORRECTO porque sigue siendo string
```
### Nombres de variables iguales
TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:
```javascript
( () => {
    let myName = "Victoria";
})();
```
## Numbers
El tipo de dato number se usa para variables que contendrán números positivos, negativos o decimales.
### Operaciones
En Javascript:
```javascript
//Javascript
let myNumber = 30;
myNumber = myNumber + "5"; //El resultado sería '305'
```
En TypeScript:
```javascript
//TypeScript
let myNumber: number = 30;

myNumber = myNumber + 10; //CORRECTO
myNumber = myNumber + "10"; //INCORRECTO
```
### Uso de variables sin inicializar
Si queremos declarar una variable sin asignarle un valor, en TS lo tenemos que hacer de manera explícita. Cuando queramos usar una variable sin inicializar (sin asignarle un valor), en TS nos saltará error.
## Arrays
Es una colección de datos ordenada. Los definimos de la siguiente manera:
```javascript
let prices = [1,2,3,4,5];

/* Método Push para agregar un elemento al final del array */
prices.push(6);
console.log(prices); // [1,2,3,4,5,6]
```
Para el array prices, TypeScript, de no indicarle explícitamente, va a inferir que este solo contendrá valores del tipo number, por lo que si se quiere agregar un valor string, por ejemplo, nos indicará un error:
```javascript
//TypeScript
prices.push("texto"); //ERROR. Se espera agregar solo números al array.
```
Esto debido a que en su inicialización se le asignó un array que solo contenía números.
También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:
```javascript
let meses = ["Mayo","Junio","Julio"];
meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.
```
### Tipado de arrays en TypeScript
- Indicar explícitamente los tipos de datos que almacenará el array: 
```javascript
let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
let otherPrices: (boolean | number)[];
```
- En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:
```javascript
//TypeScript
let prices = ["hola",2,4,6,"mundo"];
// "hola", "mundo" => string
// 2,4,6 => number
```
Dejamos claro que queremos que soporte los tipos de dato string y number.
## Union Types (flexibilidad en TS)
Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
```javascript
let userId: string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
}
```
## Alias y tipos literales
- Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:
```javascript
type UserID = string | boolean | number;
```
¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!
```javascript
let dynamicVar: UserID = "300";

dynamicVar = true;
dynamicVar = 200;
```
Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.
```javascript
type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}
```
Nota: la palabra type en los Alias es algo propio de TypeScript.

- Gracias a los Tipos Literales podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:
```javascript
let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO
shirtSize = "S"; //CORRECTO
shirtSize = "qwrty"; //ERROR. No está en las opciones.
shirtSize = "SS"; //ERROR. Letra de más.
shirtSize = "m"; //ERROR. Está en minúscula.
```
### Alias + Tipos Literales
También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:
```javascript
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;
shirtSize = "M";

function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${userSize}`);
}
```
## Null y Undefined
Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, string o number.
El tipo de dato null es para indicar un valor nulo y undefined para algo indefinido. Son tipos diferentes.
### Null y Undefined como tipo Any
En TypeScript, si no especificamos que va a ser null o undefined, estos son inferidos como tipo any:
```javascript
//TypeScript
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined
```
### Union Types como emergencia
Hay casos en la que queremos que una variable sea de tipo string o number y que al inicializarlas sean de tipo null o undefined para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los Union Types:
```javascript
let myNumber: number | null = null;
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";
```
## Funciones
Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:
- Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):
```javascript
type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}
```
En el argumento createdAt se indica que es de tipo Date en alusión al objeto Date propio de JavaScript y no a un tipo de dato como string o number. Son diferentes las definiciones.
- Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:
```javascript
const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
)
```
- Si queremos que un argumento sea opcional de enviar, podemos usar el modificador _?_ junto al nombre del argumento:
```javascript
type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
```
Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
```javascript
function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} // ERROR
```
### Retorno de las funciones
El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:
- Void: funciones sin retorno
Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void. Se definen así:
```javascript
//TypeScript
function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
}
```
- Funciones con retorno
Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
```javascript
//TypeScript
function suma(a: number, b: number): number {
    return a + b;
}

function holaMundo(): string {
    return "Hello, World!";
}
```
También los retornos pueden ser más de un tipo de dato:
```javascript
//TypeScript
function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}
```
TypeScript también lo infiere
Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea string, number, etc.) o si nada es devuelto (tipo void).
### Objetos como parametros de funciones
Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:
```javascript
//TypeScript
function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
}

imprimirDatos({
      username: 'freddier',
      email: 'freddy@email.com'
})
```
En el ejemplo, el nombre data hace referencia al objeto que recibirá la función imprimirDatos. Por ello, para acceder al valor de username lo definimos en el console.log como data.username y para el email como data.email, pues así es como se accede a las propiedades de un objeto.

Finalmente, cuando invocamos imprimirDatos y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como data tal como lo hicimos en la definición de la función.
### Objetos como tipos
En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
```javascript
//TypeScript
type userData = {
    username: string,
    email: string
}
```
Y luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir:
```javascript
//TypeScript
type userData = {
    username: string,
    email: string
}

let usersList: userData[] = [];

usersList.push({
    username: "freddier", //CORRECTO
    email: "freddy@email.com", //CORRECTO
});
usersList.push({
    username: "cvander", //CORRECTO
    email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});
```
## Modulos: Import y export
Nuestro código puede ser dividido en varios módulos (archivos), por lo que para poder usar las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos import y export.
### Export
```javascript
/*---->  Archivo: funciones.ts  <----*/
export function suma(a: number, b: number): number {
    return a + b;
}

export function resta(a: number, b: number): number {
    return a - b;
}

export let numerosRandom = [1, 30, 40, 50];
export type Sizes = "S" | "M" | "L" | "XL";
```
Como observamos, tenemos un archivo llamado funciones.ts la cual contiene dos funciones: suma y resta. Si estas queremos usarlas desde otro archivo, necesitamos usar la palabra reservada export justo antes de definir nuestra función (lo mismo aplica para las variables). De esta forma indicamos que serán exportados para ser utilizados desde otro archivo JavaScript/TypeScript.
### Import
```javascript
/*---> Archivo: programa.ts  <---*/

import {suma, resta, Sizes} from "./funciones.ts";
```
Finalmente, las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente manera:

- Usamos la palabra reservada import
- Entre llaves indicamos las funciones y/o variables que queremos acceder. Hacemos una separación con comas
- Usamos la palabra reservada from, seguido de, entre comillas dobles o simples, la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.
#### Nota
Si es un módulo TypeScript lo que estamos importando, es importante que en la ruta de los import figure la extensión .ts de dicho archivo. Si es un archivo JavaScript, colocar la extensión .js es opcional.