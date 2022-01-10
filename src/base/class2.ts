//抽象类
//* 抽象类只能被继承，不能实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void //* 抽象方法
}

class Dog2 extends Animal{
  constructor(name: string) {
    super()
    this.name = name;
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog = new Dog2('wangwang');
dog.eat();

//多态
class Cat extends Animal {
  sleep() {
      console.log("cat sleep") 
  }
}
let cat = new Cat()
let animals: Animal[] = [dog, cat];
animals.forEach(i => {
  i.sleep();
})

class workFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new workFlow().step1().step2()


class Myflow extends workFlow {
  next() {
    return this
  }
}
new Myflow().next().step1().step2();