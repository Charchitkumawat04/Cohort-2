
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }

const a = new Animal('tiger', 9);
const b = new Animal('Tim', 5);

console.log(a.describe());
console.log(b.describe());
