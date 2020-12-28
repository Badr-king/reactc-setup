import React,{Component} from 'react'
import Navber from './component/Navber'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Features from './component/Features';
import Pricing from './component/Pricing';
class  App extends Component {
  render(){
  return (
    <BrowserRouter>
     <div className="App">
    <Navber />
    

    <Route path="/home" component={Home} />
    <Route path="/features" component={Features} />
    <Route path="/pricing" component={Pricing} />
    
    </div>
    </BrowserRouter>
  )};
}
export default App;
