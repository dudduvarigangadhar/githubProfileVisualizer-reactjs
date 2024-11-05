import {Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import Analysis from './components/Analysis'
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import RepoItemDetails from './components/RepoItemDetails'
import Repository from './components/Repository'
import './App.css'
import ProfileContext from './ProfileContext'

const App = () => {
  const [username, setUsername] = useState('')

  const changeProfileName = newUsername => {
    setUsername(newUsername)
  }

  return (
    <ProfileContext.Provider value={{username, changeProfileName}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repository" component={Repository} />

        <Route exact path={`/repos/${username}`} component={RepoItemDetails} />
        <Route exact path="/analysis" component={Analysis} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </ProfileContext.Provider>
  )
}
export default App
