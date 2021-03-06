import Head from 'next/head'
import SignUp from '../components/SignUp'
import styles from '../styles/Home.module.css'

export default function Home() {
  //console.log(process.env.TESTADOR);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUp/>
    </div>
  )
}
