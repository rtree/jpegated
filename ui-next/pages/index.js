import { useState, useContext } from 'react'
import styles from '../styles/Home.module.css'
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import Cookies from 'js-cookie'
import { UUIDContext } from '../context'

/**
 * access control conditions 
 * link : https://lit-protocol.github.io/lit-js-sdk/api_docs_html/#accesscontrolcondition
 */
const accessControlConditions = [
  {
    contractAddress: '0x43BdB58E5C202d946abF5396cDf83f784EA66C9c',
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
  const { id } = useContext(UUIDContext)

  async function connect() {
    const resourceId = {
      baseUrl: 'http://localhost:3000',
      path: '/contactus',
      orgId: "",
      role: "",
      extraData: id
    }

    const client = new LitJsSdk.LitNodeClient({ alertWhenUnauthorized: false })
    await client.connect()
    if(client) {
      console.log("Am Connected");
    }

    /**
     * Wallet Signatures
     * AuthSig to local storage so that the user does not need to sign the message again
     * link: https://developer.litprotocol.com/SDK/authSig
     */
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