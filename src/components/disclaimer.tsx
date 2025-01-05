'use client'

import { useEffect } from "react"

export function Disclaimer(){
  useEffect(() => {
    alert('[면책]\n카카오 쇼핑하우의 사이트가 아닙니다. 공식 사이트 shoppinghow.kakao.com을 방문하세요.\n\n[Disclaimer]\nThis is not the actual site of ShoppingHow. Please visit shoppinghow.kakao.com for the official site.')
  }, [])
  return<></>
}