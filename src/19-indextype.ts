// // 索引类型
// // 关键字 字面量的联合类型

// let o = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// function getValues<T, k extends keyof T>(obj: T, keys: k[]): T[k][] {
//   return keys.map(key => obj[key])
// }

// console.log(getValues(o, ['a']))
// // fonsole.log(getValues(o, ['d'])) //如何解决 该值必须是 对象o的属性

// //keyof T 索引类型查询操作符
// interface Obj {
//   a: number,
//   b: string 
// }
// let key: keyof Obj

// // 索引访问操作符 T[k]
// let value: Obj['a']

// //泛型约束 T extends U

let o = {
  a: 1,
  b: 2,
  c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][]{
  return keys.map(key => obj[key])
}

console.log('[ getValue ]', getValues(o, ['a']))
