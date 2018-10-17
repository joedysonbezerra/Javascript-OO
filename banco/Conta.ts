export class Conta {
   private numero:number;
   private saldo:number;

   constructor(numero){
      this.numero = numero;
      this.saldo = 100;
   }

   creditar(valor:number):void {
		this.saldo += valor;
	}

	debitar(valor:number):void {
		this.saldo -= valor;
	}

	get Saldo() {
		return this.saldo;
	}

   get Numero() {
		return this.numero;
	}
}
