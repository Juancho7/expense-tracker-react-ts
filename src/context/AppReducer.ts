import { TransactionAction } from '../enum'
import { TransactionGlobalState, Transaction, TransactionActionType } from '../types'

export default (state: TransactionGlobalState, action: TransactionActionType) => {
  switch (action.type) {
  case TransactionAction.AddTransaction:
    return {
      ...state,
      transactions: [...state.transactions, action.payload]
    }
  case TransactionAction.DeleteTransaction:
    return {
      ...state,
      transactions: state.transactions.filter((transaction: Transaction) => transaction.id !== action.payload)
    }
  default:
    return state
  }
}
