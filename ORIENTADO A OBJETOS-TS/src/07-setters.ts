export class MyDate {
    // Esta forma es la version corta de nuestra version corta que vendria a ser lo mismo
    // De esta manera obligatoriamente tenemos que poner explicitamente 'public' o 'private' 
        constructor(
            public year:number = 1996, //tambien podemos ponerle valores por defecto
            private _month: number = 12, 
            private _day: number = 5
            ){}
    
        printFormat():string{
            const day = this.addPadding(this._day)
            const month = this.addPadding(this._month)
    
            return `${day}/${month}/${this.year}`;
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
                this._month += amount;
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

        get month(){
            return this._month;
        }

        //Las funciones setters no retornan nada
        //Tiene que recibir un parametro
        set month(newValue: number){
            if (newValue >= 1 && newValue <= 12) {
                this._month= newValue;
            }else{
                throw new Error('Month out of range');
            } 
        }
    }
    
    const myDate = new MyDate(1996,12,5);
    console.log(myDate.printFormat());
    myDate.month=4;
    console.log('run', myDate.month);
    myDate.month=78;
    console.log('esto no debe aparecer', myDate.month);


    //en la consola podemos correr el archivo 'ts' con => npx ts-node src/07-setters.ts
    
    