// function getValue (value: number){
//     return value
// }

//De esta forma podemos enviar nuestro tipado por parametro
function getValue <myType> (value: myType){
    const array: myType[] = [value];
    return value
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,2,3,6]).forEach;