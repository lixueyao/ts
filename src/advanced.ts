//类型兼容性

//接口兼容
interface X {
	a: any;
	b: any;	
}

interface Y {
	a: any;
	b: any;
	c: any;
}

let x: X = {a: 1, b: 2};
let y: Y = {a: 1, b: 2, c: 3};
x = y;
// y = x;

//函数兼容
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
	return handler;
}
//1、参数的个数
let handler1 = (a: number) => {}
hof(handler1);
let handler2 = (a: number, b: number) => {}
hof(handler2);

//可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = b;
a = c;

//2、参数类型必须要匹配
interface Point3D {
	x: number;
	y: number;
	z: number;
}

interface Point2D {
	x: number;
	y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

p3d = p2d;
// p2d = p3d; // 与接口不同，参数多的兼容参数少的

//3、返回值类型
let f = () => ({name: 'Alice'});
let g = () => ({name: 'Alice', location:'beijing'});
f = g;
// g = f;  f的返回值类型是g返回的子类型, 成员少的兼容成员多的

//函数重栽
function overload(a1: number, b1: number): number;
function overload(a1: number, b1: number): string;
function overload(a1: any, b1: any): any {};

//枚举类型
enum F { Apple, Banana }
enum C { Red, Yellow }

let fr: F.Apple = 3;
let n: number = F.Apple;
//枚举之间是相互不兼容的 

//类兼容性
class A {
	constructor(p: number, q: number) {}
	id: number = 1
	private name: string = ''
}

class B {
	static s = 1
	constructor(p: number) {}
	id: number = 2
	private name: string = ''
}

let aa = new A(1, 2)
let bb = new B(1)
aa = bb;
bb = aa; 
class C1 extends A {}
let cc = new C1()
cc = aa;
aa = cc;

//俩个实例是相互兼容的，因为都具有id属性,  
//如果含有私有成员就不会兼容了,只有父子类会相互兼容 
//类的静态函数和构造函数是不参与比较的


//泛型兼容
interface Empty<T> {
	value: T //如果没有value会兼容 
}
// let obj1: Empty<number> = {};
// let obj2: Empty<number> = {};
// obj1 = obj2;

//泛型函数
let l1 = <T>(x: T): T => {
	console.log('x');
	return x;
}

let l2 = <U>(y: U): U => {
	console.log('y');
	return y;
}

l1 = l2;


