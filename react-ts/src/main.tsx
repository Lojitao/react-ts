import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//元祖
let arr1 : Array<string>

arr1 = ['helllo','haha']

console.log('arr1',arr1);


const RequestStatus = {
  Pending: "PENDING",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;

type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];
// `RequestStatus` 的类型是 `"PENDING" | "SUCCESS" | "FAILED"`

function handleRequest(status: RequestStatus) {
  switch (status) {
    case RequestStatus.Pending:
      console.log("Request is pending...");
      break;
    case RequestStatus.Success:
      console.log("Request was successful!");
      break;
    case RequestStatus.Failed:
      console.log("Request has failed.");
      break;
    default:
      console.log("Unknown status");
  }
}

type SetOptional<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
} & {
  [P in K]?: T[P];
};

interface Foo {
  a: number;
  b?: string;
  c: boolean;
}

type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

let newObj :SomeOptional={
  c:true
}


// 自定义工具类型，用于判断两个类型是否完全相等
type IsEqual<A, B> = (
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
);






interface Example {
  a: string;
  e: number;
  b: string | number;
  c: () => void;
  d: {};
  f: string | number | boolean;
}


type ConditionalPick<T,Condition> = {
  //部分符合即可
  [K in keyof T as [Extract<T[K], Condition>] extends [never] ? never : K]: T[K];

  //完全一樣
  // [K in keyof T as IsEqual<T[K], Condition> extends true ? K : never]: T[K];
}

type StringKeysOnly = ConditionalPick<Example, string | number>;

let result:StringKeysOnly = {
  b:'asd',
  a: 'string',
  e: 343,
  f:'adas'
}


//TS 练习题第五题:
//定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。具体的使用示例如下所示：

type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = F extends (...arg:infer Args)=>infer R
  ?(x:A,...arg:Args)=>R
  :never

type FinalFn = AppendArgument<Fn, string> 
// (x: boolean, a: number, b: string) => number




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
