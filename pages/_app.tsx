import '../styles/index.css'
import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {

  return( 
    <div className='bg-slate-100'>
    <div className='max-w-screen-lg m-auto'>
    <Layout>
  <Component {...pageProps} /> 
    </Layout> 
    </div>
    </div>
  )
}

export default MyApp
