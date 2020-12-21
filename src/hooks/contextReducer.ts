import { ActionsProps, Transaction } from './types'

export const initialState: Transaction[] = []

const contextReducer = (transactions: Transaction[], action: ActionsProps) => {
  console.log({ action })
  let updatedTransactions: Transaction[]
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      updatedTransactions = transactions.filter(
        transaction => transaction.id !== action.payload,
      )
      return updatedTransactions

    case 'ADD_TRANSACTION':
      updatedTransactions = [action.payload, ...transactions]
      return updatedTransactions

    default:
      return transactions
  }
}

export default contextReducer
