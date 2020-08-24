import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {profiles} from './data.json';
// import {BrowserRouter,Route,Link} from 'react-router-dom';
// import Resume from './Resume';
import {profiles} from './data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
import './resume.css';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//              <Route exact path="/" component={Card}/>
//              <Route exact path="/resume" component={Resume}/>
//         </BrowserRouter>
//     {/* <Card/> */}
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      {/* <Card></Card> */}
      <BrowserRouter>
          <Route exact path="/" component={Card}/>
          <Route path="/resume" component={Resume}/>
      </BrowserRouter>
    </div>
  );
}

let Card= () =>{

    
  console.log(profiles)
  return(
    <div className="row justify-content-center">
      {profiles.map((carddetails,index)=>(
        <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={ index }>
          <div className="card">
            <div className="card-body">
              <h1>{carddetails.details.name}</h1>
                  <Link to ={{pathname:'/resume',sameCardData:{id:index}}} className="btn btn-primary">View Details</Link>
             
            </div>
          </div>
        </div>
      ))} 
    </div>
  );
}

export default App;
