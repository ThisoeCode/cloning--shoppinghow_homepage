'use client'
import { goto, take } from "@/lib/client"
import { useEffect, useState, type JSX } from "react"
import DropDown from "./dropdown"

export default function SearchForm(){
  const
    [isFocus,setFocus]=useState(false),
    [roll,setRoll]=useState([] as string[]),
    [query,setQuery]=useState(''),
    sugArr:JSX.Element[] = [],
    sugArrDp:JSX.Element[] = [],
    keySearches=(e:React.KeyboardEvent)=>{
      if(e.key === 'Enter'){
        e.preventDefault()
        const q=query.trim()
        if(q) goto('"'+q+'" 검색')
      }
    },
    mouseSearches=()=>{
      const q=query.trim()
      if(q) goto('"'+q+'" 검색')
    }

  useEffect(()=>{
    async function takeSuggests(){
      setRoll(await take('trend'))
    }
    takeSuggests()
  },[])

  roll.forEach((v,i)=>{
    sugArr.push(
      <i className="asug" key={'as'+i}>
        <i>{i+1}</i> <i>{v}</i>
      </i>
    )
    sugArrDp.push(
      <i className="asug" key={'dp_as'+i}
      onClick={()=>goto('"'+v+'" 검색')}>
        <i>{i+1}</i> <i>{v}</i>
      </i>
    )
  })

  return<div id='search-wrap'>
    <div id="search" className={isFocus?'focus':''}>
      <i id="search-form">
        <input type="text"
          onFocus={()=>setFocus(true)}
          onBlur={()=>setFocus(false)}
          onChange={(e)=>setQuery(e.target.value)}
          style={{color:isFocus?'black':'transparent'}}
          onKeyDown={keySearches}
        />
        <div id="search-submit" onClick={mouseSearches}><i className="ico"></i></div>
      </i>
      <i id="suggestroll" style={
        {display: isFocus?'none':'flex'}
      }>
        {sugArr.length?sugArr:<></>}
      </i>
    </div>
    <DropDown query={query} isFocus={isFocus} suggests={sugArrDp}/>
  </div>
}