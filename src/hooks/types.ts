import { Dispatch } from 'react'

export interface Transaction {
  id: string
  type: string
  category: string
  amount: number
  date: string
}

export type ActionsProps =
  | {
      type: 'ADD_TRANSACTION'
      payload: Transaction
    }
  | {
      type: 'DELETE_TRANSACTION'
      payload: string
    }

export interface ContextProps {
  contextReducer: (
    transactions: Transaction[],
    action: ActionsProps,
  ) => Transaction[]
}

export interface StateProviderProps {
  contextReducer: (
    transactions: Transaction[],
    action: ActionsProps,
  ) => Transaction[]
  initialState: Transaction[]
}

export interface StateContextData {
  transactions: Transaction[]
  dispatch: Dispatch<ActionsProps>
}
