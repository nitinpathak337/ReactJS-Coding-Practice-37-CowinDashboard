// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'

const apiStatusConstant = {
  initial: 'Initial',
  inProgress: 'In Progress',
  success: 'Success',
  failure: 'Failure',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstant.initial, vaccinationData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      last7DaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    console.log(updatedData)
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstant.success,
        vaccinationData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderData = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationData
    console.log(last7DaysVaccination)
    console.log(vaccinationByGender)
    const updated7DaysData = last7DaysVaccination.map(eachItem => ({
      vaccineDate: eachItem.vaccine_date,
      dose1: eachItem.dose_1,
      dose2: eachItem.dose_2,
    }))
    console.log(updated7DaysData)
    return (
      <>
        <VaccinationCoverage coverageData={updated7DaysData} />

        <VaccinationByGender genderData={vaccinationByGender} />
        <VaccinationByAge ageData={vaccinationByAge} />
      </>
    )
  }

  renderFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </>
  )

  displayData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.success:
        return this.renderData()
      case apiStatusConstant.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logo-heading">Co-WIN</h1>
        </div>
        <h1 className="para">CoWIN Vaccination in India</h1>
        {this.displayData()}
      </div>
    )
  }
}

export default CowinDashboard
