'use client'

export const

// 1. TAKE
take=async(item:string)=>{
  const res = await(await fetch(
    process.env.NEXT_PUBLIC_SELF_URL+'/api/'+item
  )).json()
  if(res.ok) return res.raw
},

// 2. Goto `acme`
goto=(acme:string)=>window.location.href=encodeURI('/acme/'+acme)