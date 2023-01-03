import React from "react";
import supportImg from "./assests/supportImg.jpg";
import Popup from "reactjs-popup";
import { Slider, TextField, Button } from "@mui/material";
import "reactjs-popup/dist/index.css";
import swal from "sweetalert";

let donations;

function Support() {
  let donationNameValue;

  return (
    <div className="support">
      <h1>Support us</h1>
      <div className="support-main">
        <div className="support-main-text">
          <h1>Where do your donation go?</h1>
          <p>
            There is alot of patients that don't have money and need your help.
            From your donations we can afford them medicine, device, and hire
            them free doctors, So if you have some money please dont hesitate to
            do such a nice thing to the poor ones.
          </p>
          <h1>How to donate?</h1>
          <p>Please click on the following button, and fill the form.</p>
          <Popup
            trigger={<button className="support-btn"> Donate now</button>}
            modal
          >
            <form className="support-form">
              <h1>Donation Form</h1>
              <TextField
                className="donatorName"
                value={donationNameValue}
                id="outlined-name"
                label="Enter your name"
                type="text"
              />
              <TextField
                className="donatorAge"
                id="outlined-age"
                label="Enter your age"
                type="number"
              />
              <TextField
                className="donatorCard"
                id="outlined-card-info"
                label="Card Information"
                type="password"
              />
              <label>How much do you want to donate?</label>
              <Slider
                className="donatorDonation"
                onChange={sliderFunc}
                aria-label="Donation"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={60}
              />
              <Button
                onClick={DonationFinalBtnFunc}
                className="donation-final-btn"
                variant="contained"
              >
                Donate 30$
              </Button>
            </form>
          </Popup>
        </div>
        <img src={supportImg} />
      </div>
    </div>
  );
}

const sliderFunc = (e) => {
  let donationFinalBtn = document.querySelector(".donation-final-btn");
  donationFinalBtn.innerHTML = "Donate " + e.target.value + "$";
};

const DonationFinalBtnFunc = (e) => {

  let donationFinalBtn = document.querySelector(".donation-final-btn");
  let cash = donationFinalBtn.innerHTML
  let cashFiltered = cash.replace('Donate ', '');
  let donNameInput = e.target.parentElement.children[1].children[1].children[0]
  let donAgeInput = e.target.parentElement.children[2].children[1].children[0]
  let donCardInput = e.target.parentElement.children[3].children[1].children[0]
  let donCashInput = cashFiltered
  if (donNameInput.value !== "" & donAgeInput.value !== "" & donCardInput.value !== ""){
  if (localStorage.donations_array != null) {
    donations = JSON.parse(localStorage.donations_array);
  } else {
    donations = [];
  }

  donations.push({
    donName: donNameInput.value,
    donAge: donAgeInput.value,
    donCard: donCardInput.value,
    donCash: donCashInput,
  });

  localStorage.setItem("donations_array", JSON.stringify(donations));
  console.log(donations);

  donNameInput.value = ""
  donAgeInput.value = ""
  donCardInput.value = ""
  swal('Donation succeed! Thanks you for your care.', {
    icon: 'success',
  });
}else{
  swal("Please fill the empty fields!", {
    icon: "warning",
    dangerMode: true,
  })
}
};

export default Support;
