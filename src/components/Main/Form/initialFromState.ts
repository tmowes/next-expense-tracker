import { formatDate } from '~/utils'

export const initialFromState = {
  type: 'Income',
  category: '',
  amount: 0,
  date: formatDate(new Date()),
}
