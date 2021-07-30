import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search';

function App() {
  const [token, setToken] = useState({ token: '', status: null })
  const [mygroup, setMygroup] = useState([])
  
  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJson) {
      setToken(JSON.parse(loggedUserJson))
    }
  }, [])



  return (
    <Router className="App">
      {
        !token.status ? (<Login setToken={setToken} />)
          : (
            <Switch>
              <Route path='/buscador'>
                <Search mygroup={mygroup} setMygroup={setMygroup} />
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
          )
      }
    </Router>
  );
}

export default App;
