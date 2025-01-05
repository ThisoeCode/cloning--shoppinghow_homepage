import type { Metadata } from "next"
import "./thisoe.css"

export const metadata: Metadata = {
  title: '쇼핑하우 (모사)',
  description: '코딩 연습만 위해 쇼핑하우의 모사 사이트입니다. \n공식 사이트 shoppinghow.kakao.com을 방문하세요. \nA cloning of the homepage of 쇼핑하우 (https://shoppinghow.kakao.com/top) purly for coding practice. \nPlease visit "shoppinghow.kakao.com" for the official site.',
}

export default function _({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
