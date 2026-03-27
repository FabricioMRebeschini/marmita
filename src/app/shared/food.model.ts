export class Food{
  public name: string;
  public amount:number;  //quantidade//

  constructor(name: string, amount: number){
    this.name = name;
    this.amount = amount;
  }
}


// mesmo que
// export class Food{
//   constructor(public name: string, public amount: number){
//   }
// }
