import styles from '../styles/Home.module.css'
import Cookies from 'cookies'
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export default function Protected(props) {
  if (!props.authorized) {
    return (
      <div className={styles.container}>
        <h2>Oopsss Try to acquire our NFT</h2>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form>
        <label>Name</label> <br />
        <input type="text" name="name" placeholder="Name"/> <br />
        <label>Message</label> <br />
        <textarea name="message" rows="4" cols="50"></textarea> <br />
        <input type="button" value="Submit"/>
      </form>
    </div>
  )
}

/**
 * Since We need to verify the jwt token we use getServerSideProps
 * getServerSideProps will be server side rendered at request time 
 * Link: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
 */

export async function getServerSideProps({ req, res, query }) {
  const { id } = query
  const cookies = new Cookies(req, res)
  const jwt = cookies.get('lit-auth')
  if (!jwt) {
    return {
      props: {
        authorized: false
      },
    }
  }

  const { verified, payload } = LitJsSdk.verifyJwt({ jwt })

  if (
    payload.baseUrl !== "http://localhost:3000"
    || payload.path !== '/contactus'
    || payload.extraData !== id
  ) {
    return {
      props: {
        authorized: false
      },
    }
  }
  return {
    props: {
      authorized: verified ? true : false
    },
  }
}