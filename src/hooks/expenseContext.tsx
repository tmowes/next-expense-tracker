import React, {
  useReducer,
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
} from 'react'
import { ActionsProps, StateProviderProps, Transaction } from './types'

export const ExpenseContext = createContext<
  [Transaction[], Dispatch<ActionsProps>]
>({} as [Transaction[], Dispatch<ActionsProps>])

export const ExpenseProvider = ({
  contextReducer,
  initialState,
  children,
}: PropsWithChildren<StateProviderProps>) => {
  return (
    <ExpenseContext.Provider value={useReducer(contextReducer, initialState)}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useContextValue = () => useContext(ExpenseContext)
