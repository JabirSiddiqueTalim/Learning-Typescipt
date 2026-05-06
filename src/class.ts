// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   making() {
//     console.log(`Animal is ${this.name} and sound is : ${this.sound}`)
//   }

// }

class Animal {
  constructor(public name: string, public species: string, public sound: string) {
   
  }
  makeSound() {
    console.log(`${this.name} is making  sound: ${this.sound}`);
  }

}

const dog = new Animal("Dog-tom", "Dog", "Gooo gooo");
dog. makeSound();
dog.makeSound()