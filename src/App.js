import {Route, Switch} from 'react-router-dom'

// const categoriesList = [
//   {id: 'ALL', displayText: 'All'},
//   {id: 'STATIC', displayText: 'Static'},
//   {id: 'RESPONSIVE', displayText: 'Responsive'},
//   {id: 'DYNAMIC', displayText: 'Dynamic'},
//   {id: 'REACT', displayText: 'React'},
// ]

import './App.css'

import Display from './components/Display/Display'
import NotFound from './components/NotFound/NotFound'

import Header from './components/Header/Header'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Display} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
