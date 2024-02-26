import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../hooks/useGlobalState'

function ExpenseChart () {
  const { transactions } = useGlobalState()

  const totalIncome = transactions.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)

  const totalExpense = transactions.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

  const totalExpensesPercent = Math.round((totalExpense / totalIncome) * 100)

  const totalIncomesPercent = 100 - totalExpensesPercent

  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        { x: 'Expenses', y: totalExpensesPercent },
        { x: 'Incomes', y: totalIncomesPercent }
      ]}
      animate={{ duration: 100 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          textAnchor='middle'
          verticalAnchor='middle'
        />
      }
      style={{
        labels: { fill: 'white' }
      }}
    />
  )
}

export default ExpenseChart
