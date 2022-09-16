export interface JSONResponse {
   total: number,
   data: Transaction[]
}

export class Transaction {
  constructor(
    public type: string,
    public _id: string,
    public amount: number,
    public company: string,
    public email: string,
    public phone: string,
    public address: string,
    public name: Payer
  ) {
  }
}

export class Payer {
  constructor (public first:string,public last:string) {
  }
}


