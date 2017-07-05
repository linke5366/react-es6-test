import React from 'react'
import {render} from 'react-dom'
import Test from './components/Test'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'

// ReactDOM.render(
//   React.createElement('p', null, test),
//   document.getElementById('root')
// )

// render(<App/>, document.getElementById('app'))


render(<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Test} />
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos} />
    </Route>
  </Router>, 
  document.getElementById('app'))