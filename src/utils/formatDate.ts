const formatDate = (d: Date) => {
  const date = new Date(d)
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  const year = `${date.getFullYear()}`
  month = month.length < 2 ? `0${month}` : month
  day = day.length < 2 ? `0${day}` : day

  return [year, month, day].join('-')
}

export default formatDate
