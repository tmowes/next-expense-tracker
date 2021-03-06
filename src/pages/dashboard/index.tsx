import { Grid } from '@material-ui/core'
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from '@speechly/react-ui'
import { NextPage } from 'next'
import Link from 'next/link'

import * as C from '~/components'
import * as S from '~/styles/pages/dashboard'

import useStyles from '~/styles/pages/dashboard/_styles-ui'

const Dashboard: NextPage = () => {
  const classes = useStyles()
  return (
    <S.Container>
      <S.Nav>
        <C.MetaTags title="Dashboard" />
        <S.Title>Dashboard</S.Title>
        <Link href="/">
          <S.BackButton>Voltar para a Home</S.BackButton>
        </Link>
      </S.Nav>
      <S.Content>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: '92vh', width: '100vw' }}
        >
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <C.Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.main}>
            <C.Main title="Expense Tracker" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <C.Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <C.Details title="Expense" />
          </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
