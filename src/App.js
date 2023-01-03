import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Reservation from "./components/Reservation"
import ReservationEdit from "./components/ReservationEdit";
import ReservationCancel from "./components/ReservationCancel";
import Support from "./components/Support"
import Admin from "./components/Admin"
import background2 from "./components/assests/background-2.jpg"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react'

function App() {
  return (
<BrowserRouter>
    <div className="App divStyle" style={{ backgroundImage: `url(${background2})`}}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Reservation />} />
        <Route exact path="/reservation-edit" element={<ReservationEdit />} />
        <Route exact path="/reservation-cancel" element={<ReservationCancel />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    
    </div>
    </BrowserRouter>
  )
}

export default App


    