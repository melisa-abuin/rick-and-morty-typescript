import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty Typescript</title>
        <meta name="description" content="Test next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Banner />
      </main>
    </>
  )
}

export default Home
