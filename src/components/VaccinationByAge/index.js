// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {ageData} = props

  return (
    <div className="coverage-data-bg">
      <h1 className="coverage-heading">Vaccination By Age</h1>
      <PieChart width={500} height={240}>
        <Pie
          data={ageData}
          cx="50%"
          cy="40%"
          startAngle={0}
          endAngle={360}
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
