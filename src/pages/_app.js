import '../styles/globals.css'
import {ToastContainer} from "react-toastify"

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <ToastContainer position="top-center"></ToastContainer>
  </>)
}

export default MyApp
