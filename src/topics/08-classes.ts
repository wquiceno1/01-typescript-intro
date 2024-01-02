export class Person {
  // public name: string;
  // private address: string;

  // constructor(){
  //     this.name = 'William';
  //     this.address = 'Calle falsa 123';
  // }

  // forma corta
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "Calle falsa 123"
  ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'Calle falsa 123');
//     }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // super(realName, 'Calle falsa 123');
    // this.person = new Person(realName);
  }
}
const tonyStark = new Person("Tony", "Stark", "Calle falsa 123");
const ironMan = new Hero("Iron-man", 45, "Tony", tonyStark);

console.log(ironMan);
