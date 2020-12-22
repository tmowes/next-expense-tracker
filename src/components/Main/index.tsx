import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core'

import useStyles from './styles'
import { MainProps } from './types'
import Form from './Form'
import List from './List'
import { useContextValue } from '~/hooks'

const Main: React.FC<MainProps> = ({ title }) => {
  const classes = useStyles()
  const [transactions] = useContextValue()

  const balance = transactions.reduce(
    (acc, curr) =>
      curr.type === 'Expense' ? acc - curr.amount : acc + curr.amount,
    0,
  )

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader="powered by Julius" />
      <CardContent>
        <Typography align="center" variant="h5">
          {`Total Balance $${balance}`}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          Try saying: add income for $69 in Category Salary for Monday
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
