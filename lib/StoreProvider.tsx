"use client"
import { makeStore } from './store'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={makeStore()}>{children}</Provider>
}