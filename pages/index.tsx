import type { NextPage } from 'next'
import Head from 'next/head';
import Hero from '../pages/Hero';
import Features from './Features';
import Footer from './Footer';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Meet</title>
        <link rel="icon" href="./../favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}

export default Home
