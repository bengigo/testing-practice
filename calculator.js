// class Calculator {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static add() {
//     return this.x + this.y;
//   }

//   static substract() {
//     return this.x - this.y;
//   }

//   static divide() {
//     return this.x / this.y;
//   }

//   static multiply() {
//     return this.x * this.y;
//   }
// }

class Calculator {
  static add(x, y) {
    return x + y;
  }

  static substract(x, y) {
    return x - y;
  }

  static divide(x, y) {
    return (x / y);
  }

  static multiply(x, y) {
    return x * y;
  }
}

module.exports = Calculator;
