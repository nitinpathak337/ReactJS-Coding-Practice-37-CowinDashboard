// Write your code here
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {coverageData} = props
  console.log(coverageData)

  const formatNumber = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number
  }

  return (
    <div className="coverage-data-bg">
      <h1 className="coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer height={300} width={1000}>
        <BarChart data={coverageData}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: '#94a3b8', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={formatNumber}
            tick={{stroke: '#94a3b8', strokeWidth: 1}}
          />
          <Bar dataKey="dose1" fill="#5a8dee" name="Dose 1" />
          <Bar
            dataKey="dose2"
            fill="#f54394"
            name="Dose 2"
            wrapperStyle={{borderTopLeftRadius: 20}}
          />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
