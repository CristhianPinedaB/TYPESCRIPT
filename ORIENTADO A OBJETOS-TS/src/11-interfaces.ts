interface Driver {
    database: string;
    password: string;
    port: number;

    connect():void;
    disconnect():void;
    isConnected(name: string): boolean;
}
//Esta es la forma como la veniamos viendo
// const driver: Driver = {
//     database: '',
//     password: '',
//     port: 23
// }

//Podemos hacer como un tipo de contrato para que se cumplan con un standar
class PostgresDriver implements Driver{
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}
    disconnect(): void {
        //code
    }
    isConnected(name: string): boolean {
        return true
    }
    connect():void{
        //code
    }
}

class OracleDriver implements Driver{
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}
    disconnect(): void {
        //code
    }
    isConnected(name: string): boolean {
        return true
    }
    connect():void{
        //code
    }
}