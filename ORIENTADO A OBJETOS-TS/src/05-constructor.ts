export class MyDate {
// Esta forma es la version corta de nuestra version corta que vendria a ser lo mismo
// De esta manera obligatoriamente tenemos que poner explicitamente 'public' o 'private' 
    constructor(
        public year:number = 1996, //tambien podemos ponerle valores por defecto
        public month: number = 12, 
        private day: number = 5
        ){}

    printFormat():string{
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)

        return `${this.day}/${this.month}/${this.year}`;
    }

    private addPadding(value: number){ //este metodo se puede acceder solo desde dentro de la clase
        if(value<10){
            return `0${value}`
        }
        return `${value}`;
    }

    add(amount:number, type: 'days' | 'months' | 'years'){
        if(type === 'days'){
            this.day += amount;
        }
        if(type === 'months'){
            this.month += amount;
        }
        if(type === 'years'){
            this.year += amount;
        }
    }

    getDay(){
        return this.day
    }
}

const myDate = new MyDate(1996,12,5);