// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatch} = this.props
    if (!recentMatch) {
      return null
    }
    const {competingTeam, competingTeamLogo, matchStatus, Result} = recentMatch
    return (
      <li>
        <img src={competingTeamLogo} />
        <p>{competingTeam}</p>
        <p>{Result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
