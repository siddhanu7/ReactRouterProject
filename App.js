// import logo from './logo.svg';
import './App.css';

import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';


import {Route, Switch} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {

  const Name =() =>{
    return <h1>This is the Anubhuti Name Page</h1>;

};


  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path='/' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route path='/contact/name' component={Name}/>
        <Route component={Error}/>

      </Switch>



      <br/><br/><br/><br/><br/><br/>
      <h1>Below  functionality is pulled from Bootstrap </h1>

      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>





      <button className="btn btn-success">Test Button</button>
      

  


    </>
  );
}



export default App;
