import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Todo from './components/ToDo'
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Todo/>
        </Route>
        <Route exact path="/signin">
            <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
