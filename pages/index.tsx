import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Socials from '../components/Socials'
import About from '../components/About'
import Skills from '../components/Skills'
import Hobbies from '../components/Hobbies'
import Works from '../components/Works'
import Contact from '../components/Contact'

const Home: NextPage = () => {

  const styles = {
    mainContainer: "flex bg-gray-50 flex-col items-center py-5 bg-intro" 
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
      <Hobbies />
      <Works />
      <Contact />
    </div>
  )
}

export default Home
