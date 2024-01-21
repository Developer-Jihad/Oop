class User {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class PremiumUser extends User {
  constructor(name, age, gender, offer) {
    super(name, age, gender);
    this.offer = offer;
  }
}

const jihad = new PremiumUser("jihad", 24, "male", "25%");

console.log(jihad);
