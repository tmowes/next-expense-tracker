import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Slide,
} from '@material-ui/core'

import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'
import { FormProps } from './types'
import { useContextValue } from '~/hooks'

const Form: React.FC<FormProps> = () => {
  const classes = useStyles()
  const [transactions, dispatch] = useContextValue()
  const deleteTransaction = (id: string) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map(({ id, type, category, amount, date }) => (
        <Slide key={id} direction="down" in mountOnEnter unmountOnExit>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={category}
              secondary={`$${amount} - ${date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default Form
