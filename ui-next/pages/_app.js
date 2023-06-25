import '../styles/globals.css'
import Link from 'next/link'
import { UUIDContext,NetworkContext } from '../context'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid';

const id = uuid()

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  function navigate() {
    router.push(`/contactus?id=${id}`)
  }
  return (
    <div>
      <nav>
        <Link legacyBehavior  href="/">
          <a>
            Home
          </a>
        </Link>
        <a onClick={navigate} style={{ cursor: 'pointer' }}>
          Contact Us
        </a>
      </nav>
      <NetworkContext.Provider value={'mumbai'}>
        <UUIDContext.Provider  value={{id}}>
          <Component {...pageProps} />
        </UUIDContext.Provider>
      </NetworkContext.Provider>
    </div>
  )
}

export default MyApp