import {NextUIProvider} from '@nextui-org/react'
import "../styles/global.css";
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
  )
}

export default MyApp
