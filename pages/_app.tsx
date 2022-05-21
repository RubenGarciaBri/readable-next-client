import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { AuthProvider } from "../context/auth-context"

import store from "../redux/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
