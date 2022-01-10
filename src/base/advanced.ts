// 类型保护
// instanceof in typeof(判断基本类型)
// 类型保护方法 is 类型谓词
enum Type { Strong, Week }

class Java {
  helloJava () {
    console.log('hello java')
  }
  java: any
}

class JavaScript {
  helloJavaScript () {
    console.log('hello JavaScript')
  }
  javascript: any
}

// 类型保护方法 is
function isJava (lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type : Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // typeof 判断基本类型
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toString()
  // }

  //类型保护函数
  // if (isJava(lang)) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }
  return lang
}

getLanguage(Type.Strong, 'test')
