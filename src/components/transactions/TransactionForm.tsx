import { FormEvent, useState } from 'react'
import { useGlobalState } from '../../hooks/useGlobalState.js'

function TransactionForm () {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: amount
    })
    event.preventDefault()
    console.log(description, amount)
    setAmount(0)
    setDescription('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"
          placeholder="Enter a Description"
          onChange={e => setDescription(e.target.value)}
          className='w-full mb-2 px-3 py-2 block text-white bg-zinc-600 rounded-lg'
          value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={e => setAmount(parseFloat(e.target.value))}
          className='w-full mb-2 px-3 py-2 block text-white bg-zinc-600 rounded-lg'
          value={amount}
        />
        <button className='w-full mb-2 px-3 py-2 block text-white bg-indigo-700 rounded-lg'>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
