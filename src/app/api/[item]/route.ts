import { NJ } from "@/lib/api"
import db from "@/db.json"
import { Thisoe } from "@/lib/ts"

export async function GET(_:Request,{params}:{params:Promise<{item:string}>}){
  const raw = (db as Record<string,Thisoe>)[(await params).item]
  if(raw===undefined) return NJ({ok:false},404)
  return NJ({raw,ok:true})
}