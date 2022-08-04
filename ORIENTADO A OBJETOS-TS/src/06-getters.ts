export class MyDate {
    // Esta forma es la version corta de nuestra version corta que vendria a ser lo mismo
    // De esta manera obligatoriamente tenemos que poner explicitamente 'public' o 'private' 
        constructor(
            public year:number = 1996, //tambien podemos ponerle valores por defecto
            public month: number = 12, 
            private _day: number = 5
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
                this._day += amount;
            }
            if(type === 'months'){
                this.month += amount;
            }
            if(type === 'years'){
                this.year += amount;
            }
        }
    
        // OJO: Todas las funciones getter tienen que retornar algo
        get day(){ //esta es una funcion que accede a un valor interno, pero no modificarla
            return this._day
        }

        get isLeapYear (): boolean {
            if (this.year % 400 === 0) return true;
            if (this.year % 100 === 0) return false;
            return this.year % 4 === 0;
        }
    }
    
    const myDate = new MyDate(1996,12,5);
    console.log(myDate.day);

    const myDate2 = new MyDate(2000,12,5);
    console.log('2000',myDate2.isLeapYear); //true

    const myDate3 = new MyDate(2001,12,5);
    console.log('2001',myDate3.isLeapYear); //false
    
    const myDate4 = new MyDate(2004,12,5);
    console.log('2004',myDate4.isLeapYear); //true