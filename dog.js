// Task-3: Using new Keyword ------------------------------------------------

class Dog {
    constructor(name, breed) {
      (this.name = name), (this.bree = breed);
    }
  }
  const happyCharlie = new Dog("happyCharlie", 12);
  
  console.log(happyCharlie);