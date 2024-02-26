import { GlobalProvider } from './context/GlobalState.jsx'
import Balance from './components/Balance.jsx'
import TransactionForm from './components/transactions/TransactionForm.jsx'
import TransactionList from './components/transactions/TransactionList.jsx'
import IncomeExpenses from './components/IncomeExpenses.jsx'
import ExpenseChart from './components/ExpenseChart.js'

function App () {
  return (
    <GlobalProvider>
      <div className='h-screen flex justify-center items-center text-white bg-zinc-950'>
        <div className='container mx-auto w-3/6'>
          <div className='p-10 flex gap-x-2 bg-zinc-800 rounded-lg'>
            <div>
              <h1 className='text-4xl font-bold'>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
