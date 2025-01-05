export default async function _({params}:{params:Promise<{ acme: string }>}){
  return<>{decodeURI((await params).acme)} 페이지...</>
}