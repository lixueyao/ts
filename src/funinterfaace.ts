//函数类型接口
// let a: (x: number, y: number) => number;

// interface Add {
//   (x: number, y:number): number
// }

//* 类型别名定义
type A = (x: number, y: number) => number;

let a: A = (a, b) => a + b;

//* 混合接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {}
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
lib2();
lib2.doSomething();
