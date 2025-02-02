'use client'

import { goto } from "@/lib/client"
import { useCallback, useState } from "react"

export default function DropDown({query,isFocus,suggests}:{
  query:string,
  isFocus:boolean,
  suggests:React.JSX.Element[],
}){
  const
    q = query.trim(),
    [isStay,setStay]=useState(false),
    /** Prevent re-renders useCallback */
    handleGoto = useCallback((q:string)=>{
      goto(`"${q}" 검색`)
    },[]),
    RelateLink = useCallback(
      ({beforeQ,q,afterQ}:{
        q:string,
        beforeQ?:string,
        afterQ?:string,
      })=>{
        const b=beforeQ||'',a=afterQ||''
        return<i
          className="related-keyword"
          onClick={()=>handleGoto(b+q+a)}
        >
          {b}<span>{q}</span>{a}
        </i>
      }
    ,[handleGoto])

  return<div id="dropdown-wrap" style={{display:
    isFocus
      ? 'block'
      : isStay
        ? 'block'
        : 'none'
  }}>
    <i id="dropdown"
    onMouseEnter={()=>setStay(true)}
    onMouseLeave={()=>setTimeout(()=>setStay(false),500)}
    >{
      !q ? <>
          <p>트렌드</p>
          {suggests.length?suggests:<></>}
      </> : <>
        <RelateLink q={q} afterQ='...'/>
        <RelateLink q={q} afterQ=' 관련 키워드'/>
        <RelateLink beforeQ='ABC' q={q} afterQ='XYZ'/>
      </>
    }</i>
  </div>
}
