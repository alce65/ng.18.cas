export class Pet {
  name
  constructor(name) {
    this.name = name
  }
}


export class Person {
  myPet
  constructor(myPet) {
    this.myPet = myPet;
  }
}

const z = new Persona(new Pet('Molly'));

