import { ActionsProps, Transaction } from './types'

export const initialState: Transaction[] =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('transactions'))
    : []

const contextReducer = (transactions: Transaction[], action: ActionsProps) => {
  console.log({ action })
  let updatedTransactions: Transaction[]
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      updatedTransactions = transactions.filter(
        transaction => transaction.id !== action.payload,
      )
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
      return updatedTransactions

    case 'ADD_TRANSACTION':
      updatedTransactions = [action.payload, ...transactions]
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
      return updatedTransactions

    default:
      return transactions
  }
}

export default contextReducer
