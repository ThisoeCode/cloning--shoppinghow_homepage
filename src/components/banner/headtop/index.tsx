import Image from "next/image"
import Link from "next/link"
import SearchForm from "./search"

export default function HeadTop(){
  return<i id='headtop'>
    <Link id="headlogo" href="/">
      <Image
        src='/logo_shw_2021.png'
        width={120} height={50}
        alt="쇼핑하우"
      />
    </Link>
    <SearchForm/>
  </i>
}
