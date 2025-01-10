'use client'

import { useState } from "react"

export default function Search(){
  const
    [isFocus,setFocus]=useState(false),
    // [suggest,setSuggest]=useState({no:0,word:''}),
    [ctt,setCtt]=useState('')


  return<i id="search" className={isFocus?'focus':''}>
    <input type="text"
      onFocus={()=>setFocus(true)}
      onBlur={()=>setFocus(false)}
      onChange={(e)=>setCtt(e.target.value)}
      style={{color:isFocus?'black':'transparent'}}
    />
    <i id="suggestroll" style={{display:isFocus&&!ctt?'block':'none'}}>

    </i>
    <i id="dropdown">

    </i>
  </i>
}
