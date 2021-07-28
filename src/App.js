import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
