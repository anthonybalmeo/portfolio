import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('../Home'),
  loading: Loading,
})

export const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
)