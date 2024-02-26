import { useGlobalState } from '../../hooks/useGlobalState'
import { Transaction } from '../../types'

function TransactionItem ({ transaction }: { transaction: Transaction }) {
  const { deleteTransaction } = useGlobalState()

  return (
    <li className='w-full mb-2 px-3 py-1 flex justify-between items-center text-white bg-zinc-600 rounded-lg'>
      <p className='text-sm'>{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button onClick={() => { deleteTransaction(transaction.id) }}>
              x
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
