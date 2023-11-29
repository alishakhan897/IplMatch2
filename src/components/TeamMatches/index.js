// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {TeamList: []}

  componentDidMount() {
    this.MatchIdPlayer()
  }

  MatchIdPlayer = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const UpdatedList = {
      teamBannerUrl: data.team_banner_url,
      LatestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        Date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        Result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        Umpires: data.latest_match_details.umpires,
        Venue: data.latest_match_details.venue,
      },
      RecentMatches: data.recent_matches.map(each => ({
        id: each.id,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        Date: each.date,
        firstInnings: each.first_innings,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        Result: each.result,
        secondInnings: each.second_innings,
        Umpires: each.umpires,
        Venue: each.venue,
      })),
    }
    this.setState({TeamList: UpdatedList})
  }

  className = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'SRH':
        return 'srh'
      case 'MI':
        return 'mi'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {TeamList} = this.state
    const {teamBannerUrl, LatestMatchDetails, RecentMatches} = TeamList

    return (
      <div className={`main-container-royal ${this.className()}`}>
        <img src={teamBannerUrl} className="teamBanner" />
        <div className="heading-latest">
          <h1 className="heading-1">Latest Matches</h1>
        </div>
        <LatestMatch latestMatch={LatestMatchDetails} />
        <ul>
          {RecentMatches.map(each => (
            <MatchCard recentMatch={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
