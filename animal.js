// Task 9: JavaScript Inheritance with Animals -----------------------------------

class Animal {
    constructor(name, sound) {
      this.sound = sound;
      this.name = name;
    }
  }
  class GheuDog extends Animal {
    constructor(name, sound) {
      super(name, sound);
    }
    msound() {
      return `This is ${this.name}, it's sound is ${this.sound}.`;
    }
  }
  class MeuCat extends Animal {
    constructor(name, sound) {
      super(name, sound);
    }
    msound() {
      return `This is ${this.name}, it's sound is ${this.sound}.`;
    }
  }
  const dogSound = new GheuDog("Big-Dog", "bark");
  const catSound = new MeuCat("heyCat", "Meu");
  console.log(catSound.msound());
  console.log(dogSound.msound());