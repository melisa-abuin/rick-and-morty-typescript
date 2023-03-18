import { PropsWithChildren } from 'react'
import { Banner } from '../banner'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { CharactersSection } from './styles'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>Rick and Morty Typescript</title>
      <meta name="description" content="Test next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={inter.className}>
      <Banner />

      <CharactersSection>{children}</CharactersSection>
    </main>
  </>
)
