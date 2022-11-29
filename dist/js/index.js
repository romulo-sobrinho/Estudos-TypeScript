'use strict'
// // tipos de variáveis - string, boolean, number
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
//   //number - recebe só números
//   let x: number = 10;
//   x = 13;
//   console.log(x)
//   //any - recebe qualquer tipo de dados
//   let a: any = 0;
//   a = "teste";
//   a = 13;
//   a = [1,2,3]
//   //array
//   const myNumbers: number[] = [1,2,3];
//   //tuplas - determina a quantidade de dados e o tipo
//   let myTuple: [number, string, string[]];
//   myTuple = [13, "texto", ["t1", "t2", "t3"]];
//   //objeto
//   const user: {name: string; age: number} = {
//     name: "Rômulo",
//     age: 31
//   }
//   //union type
//   let id: string | number = "10"
//   id = 200
//   //type alias
//   type myIdType = number | string
//   const userId: myIdType = 10
//   //Enum
//     enum Size {
//       P = "Pequeno",
//       M = "Médio",
//       G = "Grande",
//       EXG = "Extra Grande"
//     }
//     const camisa = {
//       name: "Camisa gola V",
//       size: Size.G
//     }
//     console.log(camisa);
//   //Literal types
//   let teste: "algumvalor";
//   // teste = "outrovalor"
//   teste = "algumvalor"
//   //Funções
//   function sum(a: number, b: number): number {
//     return a + b;
//   }
//   function logger(msg: string): void {
//   }
//   function greeting(name: string, greet?: string) {
//     if(greet) {
//       console.log(`Olá ${greet} ${name}`);
//     } else {
//       console.log(`Olá ${name}`);
//     }
//   }
//   greeting("Rômulo");
//   //Funções genéricas
//   function showArraysItems<T>(arr: T[]) {
//     arr.forEach(item => {
//       console.log(`Item ${item}`)
//     });
//   }
//   const a1 = [1,2,3];
//   showArraysItems(a1);
//   const a2 = ["a", "b", "c"];
//   showArraysItems(a2);
// //Classes
// class User {
//   name
//   role
//   isApproved
//   constructor(name: string, role: string, isApproved: boolean) {
//     this.name = name;
//     this.role = role;
//     this.isApproved = isApproved;
//   }
//   showUserName() {
//     console.log(`O nome do usuário é ${this.name}`);
//   }
// }
// const user1 = new User("Rômulo", "Admin", true);
// user1.showUserName();
// //Interfaces em class
// interface Ivehicle {
//   brand: string;
//   showBrand(): void
// }
// class Car implements Ivehicle {
//   brand
//   wheels
//   constructor(brand: string, wheels: number) {
//     this.brand = brand;
//     this.wheels = wheels;
//   }
//   showBrand(): void {
//     console.log(`A marca do carro é: ${this.brand}`);
//   }
// }
// const fusca = new Car("VW", 4);
// //Herança
// class SuperCar extends Car {
//   engine
//   constructor(brand: string, wheels: number, engine: number) {
//     super(brand, wheels);
//     this.engine = engine;
//   }
// }
// const a4 = new SuperCar("Audi", 4, 2.0);
//Decorators
function BaseParameters() {
  return function (constructor) {
    return class extends constructor {
      constructor() {
        super(...arguments)
        this.id = Math.random()
        this.createdAt = new Date()
      }
    }
  }
}
let Person = class Person {
  constructor(name) {
    this.name = name
  }
}
Person = __decorate([BaseParameters()], Person)
const p1 = new Person('Rômulo')
console.log(p1)
