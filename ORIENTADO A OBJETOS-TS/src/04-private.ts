//Con private limitamos el acceso de las propiedades y de algunos metodos si asi lo quisieramos
export class MyDate {
    year: number;
    month: number;
    private day: number;

    constructor(year:number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

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
//console.log(myDate.day); // ya no se puede acceder ni modificar
