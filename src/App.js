import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Colors from './react-color-factory/Colors'
import Color from './react-color-factory/Color'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors"><Colors /></Route>
          <Route exact path="/colors/:color"><Color /></Route>
          <Redirect to="colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
