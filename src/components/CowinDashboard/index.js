import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

class CowinDashboard extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
            alt="website logo"
          />
          <p>Co-WIN</p>
        </div>
        <p>CoWIN Vaccination in India</p>
        <VaccinationCoverage />
        <VaccinationByGender />
        <VaccinationByAge />
      </div>
    )
  }
}
export default CowinDashboard
