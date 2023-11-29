// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    if (!latestMatch) {
      return null
    }
    const {
      competingTeam,
      competingTeamLogo,
      Date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      Umpires,
      Venue,
      Result,
    } = latestMatch

    return (
      <div className="latest-match-class">
        <div className="latest-match-class2">
          <div className="para-image-container">
            <div className="para-container">
              <p className="para1">{competingTeam}</p>
              <p className="para2">{Date}</p>
              <p className="para2">{Venue}</p>
              <p className="para2">{Result}</p>
            </div>
            <div className="image-containers">
              <img src={competingTeamLogo} className="images" />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="second-container2">
            <p className="firstIning">First Innings</p>
            <p className="firstIning">{firstInnings}</p>
            <p className="firstIning">Second Innings</p>
            <p className="firstIning">{secondInnings}</p>
            <p className="firstIning">Man of the Match</p>
            <p className="firstIning">{manOfTheMatch}</p>
            <p className="firstIning">Umpires</p>
            <p className="firstIning">{Umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
