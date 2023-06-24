// import useState from react
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/page.module.css'
// import lit js sdk
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export default function Home() {
  const [connected, setConnected] = useState()

  async function connect() {

    const client = new LitJsSdk.LitNodeClient({ alertWhenUnauthorized: false})

    await client.connect();

    if(client) {
      console.log("Am Connected");
    }

    setConnected(true)
  }
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      {
        !connected && <button onClick={connect}>Connect</button>
      }
    </div>
  )
}