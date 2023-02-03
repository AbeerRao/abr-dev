import type { NextPage } from 'next'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Socials from '../components/Socials'
import About from '../components/About'

const Home: NextPage = () => {

  const styles = {
    mainContainer: "flex flex-col items-center py-5"
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      <Intro />
      <Socials />
      <About />
    </div>
  )
}

export default Home
