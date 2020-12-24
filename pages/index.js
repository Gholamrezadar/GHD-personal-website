import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gholamreza Dar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my website!" />
        <p className="description">
          still a work in progress ...
        </p>
      </main>

      <Footer />
    </div>
  )
}
