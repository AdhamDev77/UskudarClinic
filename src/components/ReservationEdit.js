import React from 'react'
import swal from "sweetalert";

function ButtonEdit(e) {
        swal("Your Edit Confirmed !", {
icon: "success",
dangerMode: true,
})}

function ReservationEdit() {
  return (
    <div className="res">
      <h1>Reservation Edit</h1>
        <div className="form">
            <input type="text" placeholder='Enter name'></input>
            <input type="date" placeholder='Enter old date'></input>
            <input type="date" placeholder='Enter new date'></input>
            <button className='edit' onClick={ButtonEdit}>Edit</button>
            </div>
    </div>
  )
}

export default ReservationEdit
