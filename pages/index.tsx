import type { NextPage } from 'next'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Socials from '../components/Socials'
import About from '../components/About'
import Skills from '../components/Skills'
import Head from 'next/head'

const Home: NextPage = () => {

  const styles = {
    mainContainer: "flex flex-col items-center py-5"
  }

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Abr.Dev</title>
      </Head>
      <Header />
      <Intro />
      <Socials />
      <About />
      <Skills />
    </div>
  )
}

export default Home
