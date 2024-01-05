// import Image from 'next/image'
// import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main >
      <div>
      <h1> hellow</h1>
      <Link href="/productlist">Product List </Link>
      <Link href="/productlistserver">Product List Server </Link>
      <h1 style={{fontFamily: "Roboto", fontWeight: "100"}}> font check</h1>
      </div>
    </main>
  )
}
