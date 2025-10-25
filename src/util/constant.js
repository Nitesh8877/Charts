export const generateTimeSeriesData = (timeRange = '1m') => {
  const data = []
  let points, labelPrefix
  
  switch(timeRange) {
    case '7d':
      points = 7
      labelPrefix = 'Day'
      break
    case '30d':
      points = 30
      labelPrefix = 'Day'
      break
    case '1m':
      points = 12
      labelPrefix = 'Week'
      break
    case '3m':
      points = 13
      labelPrefix = 'Week'
      break
    default:
      points = 30
      labelPrefix = 'Day'
  }

  let baseStudent = 500
  let baseRevenue = 50000
  let baseUsers = 2000
  let baseFees = 20000

  for (let i = 0; i < points; i++) {
    // Add some realistic fluctuations
    const student = baseStudent + Math.floor(Math.random() * 200) - 100 + (i * 20)
    const revenue = baseRevenue + Math.floor(Math.random() * 20000) - 10000 + (i * 5000)
    const users = baseUsers + Math.floor(Math.random() * 500) - 250 + (i * 100)
    const fees = baseFees + Math.floor(Math.random() * 10000) - 5000 + (i * 2000)

    data.push({
      name: `${labelPrefix} ${i + 1}`,
      student: Math.max(0, student),
      fees: Math.max(0, fees),
      revenue: Math.max(0, revenue),
      users: Math.max(0, users),
      profit: Math.max(0, revenue - fees),
      expenses: Math.max(0, fees * 0.7)
    })

    // Update base values for trend
    baseStudent = student
    baseRevenue = revenue
    baseUsers = users
    baseFees = fees
  }
  return data
}

export const pdata = generateTimeSeriesData('1m')

export const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 150 },
  { name: 'Group F', value: 100 },
]