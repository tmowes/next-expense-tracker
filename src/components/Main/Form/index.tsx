/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react'
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
import { useSpeechContext } from '@speechly/react-client'

import useStyles from './styles'
import { FormProps } from './types'
import { initialFormState } from './initialFormState'
import { useContextValue } from '~/hooks'
import { expenseCategories, incomeCategories } from '~/constants'
import { formatDate } from '~/utils'
import { Toast } from '~/components'

const Form: React.FC<FormProps> = () => {
  const classes = useStyles()
  const { segment } = useSpeechContext()
  const [formData, setFormData] = useState(initialFormState)
  const [open, setOpen] = useState(false)

  const [, dispatch] = useContextValue()

  const selectedCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
      return
    setOpen(true)
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    setFormData(initialFormState)
  }

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' })
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' })
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'create_transaction'
      ) {
        return createTransaction()
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'cancel_transaction'
      ) {
        return setFormData(initialFormState)
      }

      segment.entities.forEach(s => {
        const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`

        switch (s.type) {
          case 'amount':
            setFormData({ ...formData, amount: Number(s.value) })
            break
          case 'category':
            if (incomeCategories.map(iC => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category })
            } else if (
              expenseCategories.map(iC => iC.type).includes(category)
            ) {
              setFormData({ ...formData, type: 'Expense', category })
            }
            break
          case 'date':
            setFormData({ ...formData, date: s.value })
            break
          default:
            break
        }
      })

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction()
      }
    }
  }, [segment])

  return (
    <Grid container spacing={2}>
      <Toast open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && segment.words.map(w => w.value).join(' ')}
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
