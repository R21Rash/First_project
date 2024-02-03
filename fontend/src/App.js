import Home from './component/Home';
import Man from './component/Man';
import Woman from './component/Woman';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login';
import Register from './component/UserRegister';
import Admin from './component/Admin';
import Upload from './component/Upload';
import AdminMan from './component/AdminMan';
import AdminDetails from './component/AdminDetails';
import Details from './component/Details';
import Payment from './component/Payment';



function App() {
  return (
    <div>
      <Router>
        
        <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/product/man" element={<Man />} />
              <Route path="/woman" element={<Woman />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/upload" element={<Upload />} /> 
              <Route path="/admin/product/Man" element={<AdminMan />} />
              <Route path="/admin/product/Man/AdminDetails/:id/:name/:imgSrc/:description/:price" element={<AdminDetails />} />
              <Route path="/user/product/details/:id/:name/:imgSrc/:description/:price" element={<Details />} />
              <Route path ="/user/product/details/payment"  element ={<Payment />} />
        </Routes>
       
      </Router>
      {/* Regular anchor tag for opening a new page */}
     
     <a href="./home" target="_blank" rel="noopener noreferrer" />
      <a href="./product/man" target="_blank" rel="noopener noreferrer" />
      <a href="./user/login" target="_blank" rel="noopener noreferrer" />
      <a href="./woman" target="_blank" rel="noopener noreferrer" />
    
      <a href="./user/register" target="_blank" rel="noopener noreferrer" />
      <a href="./admin" target="_blank" rel="noopener noreferrer" />
      <a href="./admin/upload" target="_blank" rel="noopener noreferrer" />
      <a href="./admin/product/man" target="_blank" rel="noopener noreferrer" />
      <a href="/admin/product/Man/AdminDetails/:id" target="_blank" rel="noopener noreferrer" />
      <a href="./user/product/details/:id" target="_blank" rel="noopener noreferrer" />
      <a href="./user/product/details/payment" target="_blank" rel="noopener noreferrer" />

    </div>
  );
}

export default App;
