console.log(Math.PI); // 3.14159
console.log(Math.max(1,2,5,6,9));

class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]){
        console.log(numbers);
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}
//Con static no hace falta hacer una instancia para luego acceder a la propiedad PI de mi clase
//Lo hacemos como lo hace Javascript en la linea 1 con las propiedades static (static properties).
//Le podemos agregar readonly incluso para que luego no se pueda modificar el valor de un static.
console.log('MyMath',MyMath.PI); //3.14
const numbers = [12,2,1,112,9];
console.log('MyMath.max', MyMath.max(...numbers));

