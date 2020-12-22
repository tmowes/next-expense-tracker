import { formatDate } from '~/utils'

export const initialFormState = {
  type: 'Income',
  category: '',
  amount: 0,
  date: formatDate(new Date()),
}
