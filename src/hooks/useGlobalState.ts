import { useContext } from 'react'
import { Context } from '../context/GlobalState.jsx'
import { TransactionGlobalContext } from '../types.js'

export const useGlobalState = (): TransactionGlobalContext => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider')
  }
  return context
}
