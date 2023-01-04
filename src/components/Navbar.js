import React from 'react' 
import logo from './assests/logo2.png'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Popup from "reactjs-popup";
import { Slider, TextField, Button } from "@mui/material";
import "reactjs-popup/dist/index.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { adminMain } from './Admin'
let passwordIn;
const password = "admin123"
function Navbar() {
  const passwordFunc = (e) => {
    let PasswordINN = e.target.parentElement.children[1].children[1].children[0].value
    if(PasswordINN === password){
      swal("Login Succedd!", {
        icon: "success",
      })
      console.log(PasswordINN)
      console.log(adminMain)
    }
      else{
        window.exit()
        swal("GO AWAYY!", {
          icon: "warning",
          dangerMode: true,
        })
        
      }
    } 
    const patient = (e) => {
      let menu = document.querySelector(".dropdownMenu")
      menu.classList.toggle('dropdownMenuVis')
      }
    const patientMenu = (e) => {
      let menu = document.querySelector(".dropdownMenu")
      menu.classList.toggle('dropdownMenuVis')
    }
  return (
    
    <nav>
      <div className='logo-div'>
      <img src={logo} alt="Logo" className='logo'/>
      </div>
      <ul>
        <li><Link to="/"> Home </Link></li>



        <li>
      <button onClick={patient}>Patient</button>

      <div onClick={patientMenu} className="dropdownMenu">
        <Link id="dropdownItem" to="/reservation">Reserve now</Link>
        <Link id="dropdownItem" to="/reservation-edit">Edit Reservation</Link>
        <Link id="dropdownItem" to="/reservation-cancel">Cancel Reservation</Link>
      </div>
    </li>

        <li><Link to="/support"> Support </Link></li>
        <Popup
            trigger={<li><Link to="/admin"> Admin </Link></li>}
            modal
          >
            <form className="support-form">
              <h1>Enter Admin's Password</h1>
              <TextField
                className="donatorCard"
                value={passwordIn}
                id="outlined-name"
                label="Enter password"
                type="password"
              />
              <Button
                onClick={passwordFunc}
                className="donation-final-btn"
                variant="contained"
              >
                Log in
              </Button>
            </form>
          </Popup>
      </ul>
    </nav>
  )
}


export default Navbar
