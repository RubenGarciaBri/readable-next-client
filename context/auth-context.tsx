import * as React from "react"

import jwt_decode from "jwt-decode"
import { isPast } from "date-fns"
import axios from "axios"
import { useRouter } from "next/router"

import useLocalStorage from "../utils/hooks/useLocalStorage"
import Login from "../components/Login/Login"
import Spinner from "../components/Spinner/Spinner"

export type SignUpData = {
  email: string
  password: string
  userName: string
}

export type LogInData = {
  email: string
  password: string
}

interface AuthContextProps {
  accessToken: string
  user: any
  signUp: ({ email, password, userName }: SignUpData) => void
  logIn: () => void
  logOut: () => void
  isLoggedIn: boolean
}

const AuthContext = React.createContext<Partial<AuthContextProps>>({})

const AuthProvider = ({ children, ...props }: any) => {
  const [fetching, setFetching] = React.useState(true)
  const [accessToken, setAccessToken] = useLocalStorage(
    "access_token",
    undefined
  )
  const [user, setUser] = useLocalStorage("user", undefined)
  const [error, setError] = React.useState<string | undefined>(undefined)

  const router = useRouter()

  const offline = process.env.NEXT_PUBLIC_OFFLINE

  React.useEffect(() => {
    if (accessToken) {
      var decoded: { exp: number } = jwt_decode(accessToken)
      const { exp } = decoded
      const date = new Date(0)
      date.setUTCSeconds(exp)
      if (isPast(date)) {
        logOut()
        setFetching(false)
      } else {
        setFetching(false)
      }
    } else {
      setFetching(false)
    }
  }, [accessToken])

  const signUp = async (data: SignUpData) => {
    const { email, password, userName } = data
    setFetching(true)
    setError(undefined)

    axios
      .post("/api/signup", { email, password, userName })
      .then(res => {
        setAccessToken(res.data.idToken)
        setUser(res.data.data)
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.idToken}`
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => setFetching(false))
  }

  const logIn = async (data: LogInData) => {
    const { email, password } = data
    setFetching(true)
    setError(undefined)

    axios
      .post("/api/login", { email, password })
      .then(res => {
        setAccessToken(res.data.idToken)
        setUser(res.data.data)
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.idToken}`
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => setFetching(false))
  }

  const logOut = async () => {
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

  if (!offline && !accessToken) {
    return (
      <Login logIn={logIn} signUp={signUp} error={error} setError={setError} />
    )
  }

  return (
    <AuthContext.Provider
      value={{ user, accessToken, error, signUp, logIn, logOut }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
