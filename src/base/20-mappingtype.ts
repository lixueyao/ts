// 映射类型  从一个旧的类型形成为新的类型
//同态  非同态 

// 改为只读属性
interface Obj {
  a: number,
  b: string,
  c: boolean
}

type ReadonlyObj = Readonly<Obj>

// type PickObj = Pick<Obj, 'c' | 'a'>
type myPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
type PickObj = myPick<Obj, 'c' | 'a'>

