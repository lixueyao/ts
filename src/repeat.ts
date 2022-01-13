export {}
interface Todo {
  title: string,
  description: string,
  completed: boolean
}

type MyExclude<T, U> = T extends U ? never : T;
type T = MyExclude<'a' | 'b', 'b'>