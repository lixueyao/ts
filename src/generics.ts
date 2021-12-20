// function log<T>(value: T): T {
// 	console.log(value);
// 	return value;
// }

// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// //函数类型
// type Log = <T>(value: T) => T;
// let myLog: Log = log; //泛型函数的实现


// 约束类，但是不能约束静态成员
class Log<T> {
	run(value: T) {
		console.log(value);
		return value;
	}	
}

let log1 = new Log<number>()
log1.run(111)

let log2 = new Log()
log2.run({a:'11'})


//参数约束
interface Length {
	length: number
}
function log<T extends Length>(value: T): T {
	console.log(value, value.length);
	return value;
}
