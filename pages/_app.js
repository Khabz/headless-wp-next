import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNavigation from '../components/TopNavigation'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <TopNavigation />
        <div className="container-fluid">
          <Component {...pageProps } />
        </div>
      </>
  )   
}

export default MyApp