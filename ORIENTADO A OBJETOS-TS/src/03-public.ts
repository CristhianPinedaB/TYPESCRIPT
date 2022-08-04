//El acceso publico es el acceso por defecto que tiene typescript
//es decir que desde afuera uno puede acceder a las propiedades e incluso modificarlas
//si no ponemos 'public' por defecto lo tiene
export class MyDate {
    public year: number;
    public month: number;
    public day: number;

    constructor(year:number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat():string{
        return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1996,12,5);
console.log(myDate.day);
