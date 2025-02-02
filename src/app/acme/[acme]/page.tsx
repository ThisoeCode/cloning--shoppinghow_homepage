import Link from "next/link"

export default async function _({params}:{params:Promise<{ acme: string }>}){
  return<i id="acme">
    <i>{decodeURI((await params).acme)} 페이지...<br/></i>
    <Link href='/'><button>&lt; 홈페이지로 돌아가기</button></Link>
  </i>
}