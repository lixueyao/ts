//原始类型
let bool: boolean = true;
let num: number | undefined | null= 123;
let str: string = 'abc';

//数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];
 
//元组 (限制了数组元素的类型和个数)
let tuple: [number, string] = [1, 'aa'];
//越界问题 可插入但不可越界访问
tuple.push(2);
console.log(tuple);

//函数
let add = (x: number , y: number): number => x + y;
//函数类型
let compute: (x: number, y:number) => number;
compute = (a, b) => a + b;

//对象
let obj: {x: number, y: number} = {x: 1, y: 2};
obj.x = 3;

//symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

//undefined, null 是任何类型的子类型

let un: undefined = undefined;
let nu: null = null;
//需要配置 strictNullChecks 为false 就可以赋值给其他变量
//可以添加复和类型
num = undefined;
num = null;

//void 让任何表达式返回undefined
//解决什么问题，undefined 不是保留字会被全局覆盖为了避免这种情况 void 会确保返回undefined
let noReturn = () => {};

// any
let x 
x = 1;
x = [];
x = () => {};

//never 永远不会有返回值的类型 (异常、死循环)
let error = () => {
  throw new Error('error');
}

let endless = () => {
  while(true) {}
}





