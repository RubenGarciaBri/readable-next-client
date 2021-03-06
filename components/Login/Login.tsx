import * as React from "react"

import { LogInData, SignUpData } from "../../context/auth-context"
import { LoginForm, SignupForm } from "../Forms"

interface IPropTypes {
  logIn: (data: LogInData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  error: string | undefined
  setError: Function
}

const Login = ({ logIn, signUp, error, setError }: IPropTypes) => {
  const [activeTab, setActiveTab] = React.useState(0)

  const tabs = [
    {
      name: "Log In",
      onClick: () => {
        setError(undefined)
        setActiveTab(0)
      },
    },
    {
      name: "Sign Up",
      onClick: () => {
        setError(undefined)
        setActiveTab(1)
      },
    },
  ]

  return (
    <div className="min-h-screen px-4 bg-gray-50">
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mb-10 text-3xl font-bold text-blue-600">Readable</h1>
          <div className="w-full">
            {/* Tabs */}
            <div>
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full p-3 mb-2 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={tabs[0].name}
                  onChange={e => {
                    const value = e.target.value
                    if (value === tabs[0].name) {
                      setActiveTab(0)
                    }
                    if (value === tabs[1].name) {
                      setActiveTab(1)
                    }
                  }}
                >
                  {tabs.map((tab, i) => (
                    <option key={tab.name} onChange={() => setActiveTab(i)}>
                      {tab.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <nav
                  className="relative z-0 flex divide-x divide-gray-200 rounded-t-lg shadow"
                  aria-label="Tabs"
                >
                  {tabs.map((tab, i) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(i)}
                      className={`${
                        i === activeTab
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }                  
                      group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10
                      `}
                      aria-current={i === activeTab ? "page" : undefined}
                    >
                      <span>{tab.name}</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          i === activeTab ? "bg-blue-500" : "bg-transparent"
                        }
                        absolute inset-x-0 bottom-0 h-0.5`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            {activeTab === 0 && (
              <LoginForm logIn={logIn} error={error} setError={setError} />
            )}
            {activeTab === 1 && (
              <SignupForm signUp={signUp} error={error} setError={setError} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
