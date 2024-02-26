import { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer.ts'
import { TransactionGlobalState, Props, Transaction, TransactionId, TransactionGlobalContext } from '../types.js'
import { TransactionAction } from '../enum.js'

const initialState: TransactionGlobalState = {
  transactions: []
}

export const Context = createContext<TransactionGlobalContext | undefined>(undefined)

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('transactions')
    return localData ? JSON.parse(localData) : initialState
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state))
  }, [state])

  const addTransaction = (transaction: Transaction): void => {
    dispatch({
      type: TransactionAction.AddTransaction,
      payload: transaction
    })
  }

  const deleteTransaction = (id: TransactionId): void => {
    dispatch({
      type: TransactionAction.DeleteTransaction,
      payload: id
    })
  }

  return (
    <Context.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </Context.Provider>
  )
}
