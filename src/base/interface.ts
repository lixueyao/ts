interface List {
  readonly id: number, //* 只读属性
  name: string,
  // [x: string]: any //用任意的字符串去索引任意的类型 
  age?: number  //* "?" 表示可以有可以没有
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age);
    }
  })
}

let result = {
  data: [
    {id: 1, name: 'A', age: 123},
    {id: 2, name: "B"}
  ]
}

render(result);

//如果传入参数为对象字面量会出现类型检查
//解决的方法有3种
//* 赋值给一个变量，再传入参数
//* 使用类型断言 as <>
//* 字符串索引签名 [x: string]: any
// render ({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: "B"}
//   ]
// })

//* 数字索引签名
interface StringArry {
  [index: number]: string // 使用任意的数字来访问字符串
}

let chars: StringArry = ['a', 'b'];

//* 字符串索引签名
//* 两种签名可以混用
//* 数字签名的返回值必须是字符串签名返回值的子类型
interface Names {
  [x: string]: string,
  [z: number]: string
}



