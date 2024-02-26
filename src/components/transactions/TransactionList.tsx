import { useGlobalState } from '../../hooks/useGlobalState.js'
import TransactionItem from './TransactionItem.js'

function TransactionList () {
  const { transactions } = useGlobalState()

  return (
    <div>
      <h3 className='w-full block text-xl font-bold text-slate-300'>History</h3>

      <ul>
        {
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        }
      </ul>
    </div>
  )
}

export default TransactionList
