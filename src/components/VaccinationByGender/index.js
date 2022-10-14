// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {genderData} = props

  return (
    <div className="coverage-data-bg">
      <h1 className="coverage-heading">Vaccination By Gender</h1>
      <PieChart width={500} height={240}>
        <Pie
          data={genderData}
          cx="50%"
          cy="40%"
          innerRadius="40%"
          outerRadius="70%"
          startAngle={180}
          endAngle={0}
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
