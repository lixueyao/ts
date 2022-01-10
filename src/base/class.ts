//类的继承
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  run() {}
}

//* 构造函数天假 private 表示这个类既不能被实例化，也不能被继承
//* 构造函数天假 protected 表示这个类只能被实例化，不能被继承

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}

//类的成员修饰符 
//* public private protected(在类和子类中访问，不能被实例访问)
//* readonly 为只读,不可更改
//* 构造函数中的参数也可以直接加public，就不用再class种单独定义了
//* static  类的静态成员,只能通过类名来调用, 子类不能访问, 静态成员可以被继承