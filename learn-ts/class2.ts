//class的修饰符
// 默认都是public
class Animal2 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake2 = new Animal("li");
console.log(snake.run());

//ts-node class.ts
class Dog2 extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog2 = new Dog("dog");
class Cat2 extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `mao,${super.run()}`;
  }
}
const mao2 = new Cat("cat");
console.log(mao.run());
