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
console.log(RequestStatus);


handleRequest(RequestStatus.Pending)





type Status = number | string
type Gender = '男'|'女'
type Area = {
  height:number,
  width:number
}
type Address = {
  num:number,
  cell:number,
  room:string,
  haha?:string
}

type House = Area & Address
const house:House = {
  height:10,
  width:20,
  num:20,
  cell:33,
  room:'高級房',
}





enum Direction {
  UP ='UP',
  DOWN = 'DOWN',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
}

 



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
