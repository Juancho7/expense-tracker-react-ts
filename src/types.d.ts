import { TransactionAction } from './enum'

export interface Props{
  children: ReactNode
}

export interface Transaction {
  id: string
  description: string
  amount: number
}

export type TransactionId = string

export interface TransactionGlobalState {
  transactions: Transaction[]
}

export type TransactionActionType =
| { type: TransactionAction.AddTransaction, payload: Transaction }
| { type: TransactionAction.DeleteTransaction, payload: string };

export interface TransactionGlobalContext {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: TransactionId) => void;
}
