export {}
type MyExclude<T, U> =  T extends U ? never : T;

type b = MyExclude<'a' | 'b', 'a'>
