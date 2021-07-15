import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta  name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>This is the home Page</p>
        <Link href="/users">
          <a className={styles.btn}>See User List</a>
        </Link>
      </div>
    </>
  )
}
