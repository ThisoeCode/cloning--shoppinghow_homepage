import { NextResponse } from "next/server"
import { Thisoe } from "./ts"

export const NJ = (
  data:Record<string,Thisoe>,
  status:number = 200
)=>{
  return NextResponse.json(data,{status})
}