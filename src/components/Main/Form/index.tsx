import React, { useState } from 'react'
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

import { v4 as uuidv4 } from 'uuid'

import useStyles from './styles'
import { FormProps } from './types'
import { initialFromState } from './initialFromState'
import { useContextValue } from '~/hooks'
import { expenseCategories, incomeCategories } from '~/constants'
import { formatDate } from '~/utils'

const Form: React.FC<FormProps> = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialFromState)
  const [, dispatch] = useContextValue()

  const selectedCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    setFormData(initialFromState)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={e => {
              setFormData({ ...formData, type: e.target.value as string })
            }}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={e => {
              setFormData({ ...formData, category: e.target.value as string })
            }}
          >
            {selectedCategories.map(({ type }) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={e => {
            setFormData({
              ...formData,
              amount: (e.target.value as unknown) as number,
            })
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={e => {
            setFormData({
              ...formData,
              date: formatDate((e.target.value as unknown) as Date),
            })
          }}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  )
}

export default Form
