'use client'
import { take } from "@/lib/client"
import { useEffect, useState, type JSX } from "react"

export default function SearchForm(){
  const
    [isFocus,setFocus]=useState(false),
    [roll,setRoll]=useState([] as string[]),
    [ctt,setCtt]=useState(''),
    suggests:JSX.Element[] = []

  useEffect(()=>{
    async function takeSuggests(){
      setRoll(await take('trend'))
    }
    takeSuggests()
  },[])

  roll.forEach((v,i)=>{
    suggests.push(<i className="a-suggest"  key={'as'+i}>
      <i className="suggest-no">{i+1}</i>
      <i className="suggest-txt">{v}</i>
    </i>)
  })

  return<>
  <div id="search" className={isFocus?'focus':''}>
    <i id="search-form">
      <input type="text"
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChange={(e)=>setCtt(e.target.value)}
        style={{color:isFocus?'black':'transparent'}}
      />
      <div id="search-submit"><i className="ico"></i></div>
    </i>
    <i id="suggestroll" style={
      {display: !isFocus&&!ctt ? 'block':'none'}
    }>{suggests}</i>
    <div id="dropdown" style={{display:'none'}}>
      {suggests}
    </div>
  </div>
  </>
}
