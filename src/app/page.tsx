import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })



export default async function asyncHome() {

  const getToken = await axios
  .get(
    'https://divine-cosmopolitan-choice.discover.quiknode.pro/8e2568759967bf9240be97cc620357e38436ae4a/eth/v1/beacon/states/head/validators?status=pending_queued'
  )
  .catch(function (err) {
    throw err
  })
console.log(getToken.data.data.length)
console.log(getToken.data.data)

const valsEntering = getToken.data.data.length
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h2 className={inter.className}> Validators entering </h2>
        <div className={styles.thirteen}>
          {/* <Image src="/thirteen.svg" alt="13" width={40} height={31} priority /> */}
          <h1 className={inter.className}>{ valsEntering}</h1>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p> */}
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <h2 className={inter.className}>
            Real data
          </h2> */}
          <p className={inter.className}>Real data - Directly from a node.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p> */}
        </a>
      </div>
    </main>
  )
}
