// Task-5:  Understanding Polymorphism --------------------------------------

class Shape {
    draw() {
      return `this shape type is ${this.type}`;
    }
  }
  
  class Circle extends Shape {
    draw() {
      return `this is my Circle Shape`;
    }
  }
  class Square extends Shape {
    draw() {
      return `this is my Square Shape`;
    }
  }
  
  const myCircle = new Circle();
  const mySquare = new Square();
  
  console.log(myCircle.draw());
  console.log(mySquare.draw()); 