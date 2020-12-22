/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SyntheticEvent } from 'react'
import Snackbar, { SnackbarCloseReason } from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'
import { ToastProps } from './types'

const Toast: React.FC<ToastProps> = ({ open, setOpen }) => {
  const classes = useStyles()

  const handleClose = (
    event: SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default Toast
