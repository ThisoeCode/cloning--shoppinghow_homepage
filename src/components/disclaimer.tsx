'use client'
import { useEffect } from "react"

const DISCLAIMER = '[면책]\n카카오 쇼핑하우의 사이트가 아닙니다. 공식 사이트 shoppinghow.kakao.com을 방문하세요.\n\n[Disclaimer]\nThis is not the actual site of ShoppingHow. Please visit shoppinghow.kakao.com for the official site.'

export function Disclaimer(){
  useEffect(() => {
    const
      dref=document.referrer,
      ls=localStorage,
      cookie=ls.getItem('acknowledgeDisclaimer'),
      dt=Date.now(),
      isExp=dt-parseInt(cookie?.slice(1)||'0')>43200000/* 12hrs */,
      isNewVisit=(
        !dref && cookie &&
        !(cookie[0]==='Y')
      ) || isExp || (
        dref &&
        new URL(dref).hostname !== window.location.hostname
      )
    if(isNewVisit) ls.setItem('acknowledgeDisclaimer',
      confirm(DISCLAIMER) ? 'Y'+dt : 'N'
    )
  }, [])
  return<></>
}