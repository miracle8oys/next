import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyList | Home</title>
      </Head>

      <div className="home">
        <h1>Hello World!</h1>
      </div>
    </>  
  )
}
