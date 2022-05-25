import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import {Router, Route , Routes} from "react-router-dom";
import { BrowserRouter as Router, Route , Routes, Link} from "react-router-dom";
import ListUsers from './components/ListUser';
import CreateUsers from './components/CreateUsers';
import EditUsers from './components/EditUsers';
function App() {
  return (
    <div className="App">
    <Router>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li><h2 className="bg-nav">React MeetUp</h2></li>
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/create">New MeetUp</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user/1/edit">Edit MeetUps</Link></li>
        </ul>
        </div>
        </nav>
       <Routes>
         <Route exact path="/" element={<ListUsers />}/>
         <Route path="user/create" element={<CreateUsers />} />
         <Route path="user/:id/edit" element ={<EditUsers />} />
       </Routes>
     </Router>
    </div>
  );
}
export default App;
