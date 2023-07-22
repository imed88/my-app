import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import AddMatch from './components/AddMatch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableMatch from './components/TableMatch';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/addMatch" element={<AddMatch />}/>
        <Route exact path="/addMatch/:id" element={<AddMatch />}/>
        <Route exact path="/tablematch" element={<TableMatch />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
