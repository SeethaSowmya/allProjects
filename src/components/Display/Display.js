import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  Box,
  //   Image,
  //   SubBox,
  FailureButton,
  FailureHead,
  FailurePara,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]
const stages = {
  initial: 'INITIAL',
  load: 'LOAD',
  fail: 'FAIL',
  success: 'SUCCESS',
}

class Display extends Component {
  state = {
    status: stages.success,
    optionId: categoriesList[0].optionId,
  }

  componentDidMount() {
    this.getCourses()
  }

  OptionIdChange = event => {
    this.setState({optionId: event.target.value})
  }

  OnSuccess = () => {
    const {optionId} = this.state
    return (
      <>
        <Box id="tags" value={optionId} onChange={this.OptionIdChange}>
          {categoriesList.map(each => (
            <option value={each.optionId}>{each.displayText}</option>
          ))}
        </Box>
      </>
    )
  }

  OnFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We cannot seem to find the page you are looking for
      </FailurePara>
      <FailureButton onClick={this.getCourses}>Retry</FailureButton>
    </div>
  )

  OnLoad = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  getCourses = async () => {
    // this.setState({status: stages.load})
    // const {match} = this.props
    // const {params} = match
    // const {id} = params
    // const url = `https://apis.ccbp.in/ps/projects?category=ALL`
    // const response = await fetch(url)
    // if (response.ok === true) {
    //   const data = await response.json()
    //   console.log(data.course_details)
    //   const update = {
    //     id: data.course_details.id,
    //     imageUrl: data.course_details.image_url,
    //     name: data.course_details.name,
    //
    //   }
    //   console.log(update, 'hhhh')
    //   this.setState({listDetails: update, status: stages.success})
    // } else {
    //   this.setState({status: stages.fail})
    // }
  }

  OnSwitch = () => {
    const {status} = this.state
    switch (status) {
      case stages.success:
        return this.OnSuccess()
      case stages.load:
        return this.OnLoad()
      case stages.fail:
        return this.OnFailure()

      default:
        return null
    }
  }

  render() {
    return <>{this.OnSwitch()}</>
  }
}

export default Display
