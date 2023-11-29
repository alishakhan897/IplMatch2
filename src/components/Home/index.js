// Write your code here
import {Component} from 'react'
import TeamCards from '../TeamCard'

import './index.css'

class RouteHome extends Component {
  state = {MatchList: []}

  componentDidMount() {
    this.MatchArray()
  }

  MatchArray = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const UpdatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.team_image_url,
    }))

    this.setState({MatchList: UpdatedData})
  }

  render() {
    const {MatchList} = this.state
    return (
      <div className="main-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
          />
          <h1 className="Dashboard">IPL Dashboard</h1>
        </div>
        <div className="small-container">
          <ul>
            {MatchList.map(each => (
              <TeamCards key={each.id} MatchDetail={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default RouteHome
