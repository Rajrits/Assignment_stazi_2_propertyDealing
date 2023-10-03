import logo from './logo.svg';
import data from './MOCK_DATA.json';
import './App.css';
import Tabbar from './components&images/Tabbar';
import {

  BrowserRouter,
 
  Route,
 
  Routes,
 
 } from "react-router-dom";
 

import Propertylist from './components&images/Propertylist';
import Propertycardpage from './components&images/Propertycardpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='heading'>
      <h1>Featured Listed Property</h1>
      <h4>Real estate can be bought, sold, leased, or rented and can be a valuable investment opportunity. The value of real estate can be...</h4>
      </div>
      <Tabbar/>
      <Routes>
      <Route path='/' element = {<Propertylist location = {"NewYork"}/>}/>
      <Route path='/NewYork' element = {<Propertylist location = {"NewYork"}/>}/>
      <Route path='/Mumbai' element = {<Propertylist location = {"Mumbai"}/>}/>
      <Route path='/Paris' element = {<Propertylist location = {"Paris"}/>}/>
      <Route path='/London' element = {<Propertylist location = {"London"}/>}/>
      {
          data.map((e)=>{
            return(
              <Route path={`/${e.address}`} element = {<Propertycardpage id = {e.id}/>}/>

            )
          })
      }
        

      </Routes>
         </div>
    </BrowserRouter>
  );
}

export default App;
