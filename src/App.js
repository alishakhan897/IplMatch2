import {Route, Switch} from 'react-router-dom'
import RouteHome from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={RouteHome} />
      <Route path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </div>
)
export default App
