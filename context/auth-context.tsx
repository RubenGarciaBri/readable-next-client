import * as React from "react"

import jwt_decode from "jwt-decode"
import { isPast } from "date-fns"
import { useRouter } from "next/router"

import useLocalStorage from "../utils/hooks/useLocalStorage"
import Login from "../components/Login/Login"
import Spinner from "../components/Spinner/Spinner"

const AuthContext = React.createContext({
  data: {},
  //   login: Function,
  //   logout: Function,
  //   isLoggedIn: Boolean,
})

const AuthProvider = (props: any) => {
  const [fetching, setFetching] = React.useState(true)
  const [accessToken, setAccessToken] = useLocalStorage(
    "access_token",
    undefined
  )
  const [user, setUser] = useLocalStorage("user", undefined)
  const [error, setError] = React.useState<string | undefined>(undefined)

  const router = useRouter()

  React.useEffect(() => {
    if (accessToken) {
      var decoded: { exp: number } = jwt_decode(accessToken)
      const { exp } = decoded
      const date = new Date(0)
      date.setUTCSeconds(exp)
      if (isPast(date)) {
        logout()
        setFetching(false)
      } else {
        setFetching(false)
      }
    } else {
      setFetching(false)
    }
  }, [accessToken])

  const login = async () => {}

  const logout = async () => {
    // API CALL
    localStorage.clear()
    router.push(`/`)
    setAccessToken(undefined)
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Spinner />
      </div>
    )
  }

  if (!accessToken) {
    return <Login login={login} error={error} />
  }

  const data = { user, accessToken }

  return <AuthContext.Provider value={{ data }} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
