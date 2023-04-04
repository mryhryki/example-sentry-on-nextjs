import Head from 'next/head'
import {useCallback, useState} from "react";

export default function Home() {
  const addError = useCallback((): void => {
    const errId = crypto.randomUUID()
    const errorMessage = `ERROR: ${errId}`
    console.error(errorMessage)
    throw new Error(errorMessage)
  }, [])

  return (
    <>
      <Head>
        <title>Error Example Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main style={{maxWidth: '48rem', margin: '0 auto'}}>
        <h1>Error Example Page</h1>
        <p>
          <button onClick={addError}>Raise ERROR!</button>
        </p>
      </main>
    </>
  )
}
