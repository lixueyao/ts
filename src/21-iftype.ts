//条件类型
//infer 待推断需要根据实际情况来确定
// T extends U ? X : Y

type TypeName<T> = 
  T extends number ? "number" :
  T extends string ? "string" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "Object" ;

type T1 = TypeName<string>
type T2 = TypeName<number>

// 联合类型的  （A ｜ B）extends U ? X | Y;
// 拆解为 (A extends U ? X | Y) | (B extends U ? X | Y)
// 利用这个特性可以实现一些类型的过滤

//实现Diff
type Diff<T, U> = T extends U ? never : T
type T3 = Diff<'a' | 'b' | 'c', 'a' | 'e'>

//过滤 null  undefined

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<'a' | 'b' | null | undefined>

type T6 = Extract<"a" | "b" | "c", "a">
type T7 = Exclude<"a" | "b" | "c", "a">

// returnType 返回一个函数的类型，如何自己实现 （infer）
type T8 = ReturnType<() => string>
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : T
type T9 = MyReturnType<() => number>