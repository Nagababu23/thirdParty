import React, {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const DataFormatter = number => {
  return number.toLocaleString()
}

class VaccinationCoverage extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()

    // Assuming the data from API matches the expected structure
    const formattedData = data.vaccination_by_age.map(item => ({
      date: item.date,
      male: item.male,
      female: item.female,
    }))

    this.setState({data: formattedData})
  }

  render() {
    const {data} = this.state

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="male" name="Male" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="female" name="Female" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default VaccinationCoverage
