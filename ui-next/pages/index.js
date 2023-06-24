import { useState, useContext } from 'react'
import styles from '../styles/Home.module.css'
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import Cookies from 'js-cookie'
import { UUIDContext } from '../context'

const contractJson = require("../../truffle/build/contracts/TestNFT.json");

const accessControlConditions = [
  {
    contractAddress : contractJson.networks[80001].address, //80001 mumbai

    standardContractType: 'ERC721',
    chain: 'mumbai',
    method: 'balanceOf',
    parameters: [
      ':userAddress'
    ],
    returnValueTest: {
      comparator: '>',
      value: '0'
    }
  }
]

export default function Home() {
  const [connected, setConnected] = useState()
  const { id }                    = useContext(UUIDContext)

  async function connect() {
    const resourceId = {
      baseUrl: 'http://localhost:3000',
      path : '/contactus',
      orgId: "",
      role : "",
      extraData: id
    }

    const client = new LitJsSdk.LitNodeClient({ alertWhenUnauthorized: false })
    await client.connect()
    if(client) {
      console.log("Am Connected");
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({chain: 'mumbai'})

    await client.saveSigningCondition({ accessControlConditions, chain: 'mumbai', authSig, resourceId })
    try {
      const jwt = await client.getSignedToken({
        accessControlConditions, chain: 'mumbai', authSig, resourceId: resourceId
      })
      /**
       * Store retrieve jwt in cookies with the name lit-auth
       */
      Cookies.set('lit-auth', jwt, { expires: 1 })

    } catch (err) {
      console.log('error: ', err)
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