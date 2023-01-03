import React from 'react'

function Admin() {
  
  let patientsAdminReturn;
  let donationsAdminReturn;

  if (localStorage.patients_array != null){
    let patientsAdmin = JSON.parse(localStorage.patients_array)
    console.log(patientsAdmin)
    
    let pat_id = 0;
    patientsAdminReturn = patientsAdmin.map((patient) => {return(

      <tr>
        <td>{pat_id += 1}</td>
        <td>{patient.patientDoc}</td>
        <td>{patient.patientName}</td>
        <td>{patient.patientAge}</td>
        <td>{patient.patientDate}</td>
      </tr>

      )});
  }else{
    patientsAdminReturn = <h1>There Is No Data</h1>
  }

  if (localStorage.donations_array != null){
    let donationsAdmin = JSON.parse(localStorage.donations_array)
    
    let don_id = 0;
    donationsAdminReturn = donationsAdmin.map((donator) => {return(

      <tr>
        <td>{don_id += 1}</td>
        <td>{donator.donName}</td>
        <td>{donator.donAge}</td>
        <td>{donator.donCard}</td>
        <td>{donator.donCash}</td>
      </tr>

      )});
  }else{
    donationsAdminReturn = <h1>There Is No Data</h1>
  }
  
  if (localStorage.patients_array || localStorage.donations_array != null){
    return (
      <div>
      <h1>ADMIN PAGE</h1>
      <div className = "admin-main">
        
        
        <table>
          <thead>
          <td>ID</td>
          <td>Doctor Name</td>
          <td>Patient Name</td>
          <td>Patient Age</td>
          <td>Reservation Date</td>
          </thead>
          <tbody>
          {patientsAdminReturn}
          </tbody>
        </table>
  
      <button className = "clear-btn" onClick = {clearBtn}>Clear Data</button>

      <table>
          <thead>
          <td>ID</td>
          <td>Donator Name</td>
          <td>Donator Age</td>
          <td>Donator Card Info</td>
          <td>Donation Value</td>
          </thead>
          <tbody>
          {donationsAdminReturn}
          </tbody>
        </table>

      </div></div>
    )
  }else{
    return(
      <div className = "admin-main">
      <h1>Admin Page</h1>
      <h1>There is NO DATA</h1>
      </div>
    )
    
  }
  
}

const clearBtn = () => {
  let adminMain = document.querySelector(".admin-main")
  adminMain.innerHTML = "<h1>Admin Page</h1> <h1>The Is NO DATA</h1>"
  localStorage.clear();
}
export const adminMain = document.querySelector(".admin-main")
export default Admin

