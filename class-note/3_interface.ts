interface User {
  age: number;
  name: string;
}

let person: User = {
  age: 10,
  name: 'user',
}

function getUser(user: User) { // 함수의 인자에 인터페이스 적용
  console.log(user); 
}

const user = {
  age: 50,
  name: 'user',
};

getUser(user);

// 함수의 구조를 인터페이스로 정의
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

// 인덱싱 패턴
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = '10';
arr['abc'] = 1; // 인덱서를 number로 지정해놨지만 string으로 해도 에러가 안남

// 딕셔너리 패턴? === 인덱싱 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

obj['file'] = /a/;

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let dev: Developer = {
  language: 'ts',
  age: 20,
  name: 'dev',
}