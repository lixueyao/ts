//数字枚举
enum Role {
  Developer,
  Owner,
  Guest
}
console.log(Role.Developer)
//字符串枚举

enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了"
}

//枚举成员不能修改
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,

  //编译阶段不会计算
  d = Math.random(), 
  e = '123'.length,
  f = 4
}

//常量枚举 在编译阶段代码会被删除
//常量也可以被定义为枚举类型
const enum Month {
  Jan,
  Feb,
  Mar
}
