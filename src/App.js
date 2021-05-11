import React, { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Todo from './components/ToDo'
import {auth} from './firebase'

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    let unsubscribe = auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)

    return()=>{
      unsubscribe()
    }
    })
  },[])

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
          <Todo user={user}/>
        </Route>
        <Route exact path="/signin">
            <SignIn user={user} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
