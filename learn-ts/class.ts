class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("li");
console.log(snake.run());

//ts-node class.ts
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("dog");
class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `mao,${super.run()}`;
  }
}
const mao = new Cat("cat");
console.log(mao.run());

//class的修饰符
// 默认都是public
