// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCards = props => {
  const {MatchDetail} = props
  const {name, imageUrl, id} = MatchDetail

  return (
    <Link to={`team-matches/${id}`} className="link-class">
      <li className="list-container">
        <div className="item-container">
          <img src={imageUrl} className="iamge" />
        </div>
        <div className="name-haed">
          <h1 className="heading">{name}</h1>
        </div>
      </li>
    </Link>
  )
}

export default TeamCards
