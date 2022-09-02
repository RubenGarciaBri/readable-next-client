import * as React from "react"
import isBrowser from "../../helpers/isBrowser/isBrowser"

function useLocalStorage(key: any, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(initialValue)

  React.useEffect(() => {
    try {
      // Get from local storage by key if the browser is loaded and the initial value is not undefined
      const item = isBrowser() ? window.localStorage.getItem(key) : ""
      // Parse stored json or if none return initialValue
      setStoredValue(item ? JSON.parse(item) : initialValue)
    } catch (error) {
      // If error also return initialValue
      console.error(error)
      setStoredValue(initialValue)
    }
  }, [])

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage

      isBrowser() &&
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // Log Errors
      console.error(error)
    }
  }
  return [storedValue, setValue]
}

export default useLocalStorage
