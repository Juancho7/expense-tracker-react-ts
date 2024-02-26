import { useGlobalState } from '../hooks/useGlobalState.js'

function IncomeExpenses () {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    .toFixed(2) * -1

  return (
    <>
      <div className='my-2 flex justify-between'>
        <h3>Income</h3>
        <p>{income}</p>
      </div>
      <div className='my-2 flex justify-between'>
        <h3>Expenses</h3>
        <p>{expense}</p>
      </div>
    </>
  )
}

export default IncomeExpenses
