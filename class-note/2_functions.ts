// 함수의 파라미터에 타입을 정의
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(1, 2);

// 함수의 반환 값에 타입을 정의
function add(): number {
  return 1;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 파라미터를 더 많이(적게) 넘기면 에러

function log(a: string, b?: string) {}

log('a', 'b'); // 1 - 2개의 파라미터
