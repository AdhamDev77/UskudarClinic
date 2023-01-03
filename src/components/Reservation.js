import React from 'react'
import {useState } from 'react'
import doc from "./assests/Doc.webp"
import swal from 'sweetalert';

let patients;

const reserveBtnFunc = (e) =>{
  
  if (e.target.innerHTML === "Reserve now"){
  e.target.parentElement.parentElement.children[0].style.display = "none"
  e.target.parentElement.parentElement.children[1].children[2].style.display = "none"
  e.target.parentElement.parentElement.children[1].children[1].style.display = "block"
  e.target.parentElement.parentElement.children[1].children[0].style.paddingTop = "10px"
  e.target.parentElement.parentElement.children[1].children[0].style.textAlign = "center"
  e.target.innerHTML = "Confirm"
  }else{
  const nameInput = e.target.parentElement.parentElement.children[1].children[1].children[1]
  const ageInput = e.target.parentElement.parentElement.children[1].children[1].children[3]
  const dateInput = e.target.parentElement.parentElement.children[1].children[1].children[5]
  if (nameInput.value !== "" & ageInput.value !== "" & dateInput.value !== ""){

  e.target.parentElement.parentElement.children[0].style.display = "block"
  e.target.parentElement.parentElement.children[1].children[2].style.display = "block"
  e.target.parentElement.parentElement.children[1].children[1].style.display = "none"
  e.target.parentElement.parentElement.children[1].children[0].style.paddingTop = "5px"
  e.target.parentElement.parentElement.children[1].children[0].style.textAlign = "left"


  if (localStorage.patients_array != null){
    patients =  JSON.parse(localStorage.patients_array)
    }else{
     patients = []
    }
    
  patients.push({patientDoc: e.target.parentElement.parentElement.children[1].children[0].innerHTML, patientName: nameInput.value, patientAge: ageInput.value, patientDate: dateInput.value})

  localStorage.setItem("patients_array", JSON.stringify(patients))
  console.log(patients)

  nameInput.value = ""
  ageInput.value = ""
  dateInput.value = ""

  e.target.innerHTML = "Reserve now"
  }else{
    swal("Please fill the empty fields!", {
      icon: "warning",
      dangerMode: true,
    })
    
  }
}
}
function Reservation() {
  
  let [doctors, setDoctors] = useState([
    {namee: "Adham Refae" ,spec:"Neurologist", btnclass:"btn0"},{namee: "Leen dala" ,spec:"Baby Doctor", btnclass:"btn1"},{namee: "Javdat Alhariri" ,spec:"Dermatologist", btnclass:"btn2"},{namee: "Kowsar Mohamed" ,spec:"Gynecologist", btnclass:"btn3"},{namee: "Noureddin Waddah" ,spec:"Surgeon", btnclass:"btn4"},{namee: "Salaheldin Mohamed" ,spec:"Physician executive", btnclass:"btn5"},{namee: "Ammar Alhmoud" ,spec:"Cardiologist", btnclass:"btn6"},{namee: "Naser Alhamad" ,spec:"Internal Medicine", btnclass:"btn7"},{namee: "Reem Faisal" ,spec:"Oncologist", btnclass:"btn8"},{namee: "Q8" ,spec:"Infectious Disease", btnclass:"btn9"}
  ]);
  const doctorsReturn = doctors.map((doctor) => {return(
    <li className='doc-list-ietm'>
      <div className="doc-card">
      <img src={doc} alt="Avatar" />
      <div className="doc-card-text">

      <h4>{doctor.namee}</h4>

      <div className="doc-card-form">
        <label>Enter your name:</label>
        <input className='nameInput' type='text'/>
        <label>Enter your age:</label>
        <input className='ageInput' type='number'/>
        <label>Visit date:</label>
        <input className='dateInput' type='date'/>
      </div>

      <p>{doctor.spec}</p>
      <button onClick={reserveBtnFunc} id='reserve-btn' className={doctor.btnclass} >Reserve now</button>
      </div>
  </div>
    </li>
    )});

  return (
    
  <div className='reservation'>
      <h1>Reservation</h1>
    <ul className='doc-list'>
    {doctorsReturn}
    </ul>


  </div>
  
  )
}



export default Reservation
