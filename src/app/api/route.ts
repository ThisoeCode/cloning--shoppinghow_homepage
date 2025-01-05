import { NJ } from "@/lib/api"

export async function GET(){
  return NJ({ping:'PONG!'})
}