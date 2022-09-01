import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const index = Number(sessionStorage.getItem("remove"));
  let value = {};
  const val = JSON.parse(sessionStorage.getItem("value"));
  value = val[index];
  //   console.log(index);
  //   console.log(value);

  let d = new Date();
  let time =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear() +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2);

  const navigate = useNavigate();
  const checkout = () => {
    let values = sessionStorage.getItem("value");
    if (values != null) {
      values = JSON.parse(values);
      values = values.filter((item) => item !== values[index]);
      //   console.log(values.filter(item => item !== values[index]));
      sessionStorage.setItem("value", JSON.stringify(values));
    }
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <p className="text-start h1 p-4 m-2">Vehile check-Out</p>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">
              <b>Customer Name</b>
            </p>
            <p className="text-center">{value.customerName}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Phone Number</b>
            </p>
            <p className="text-center">{value.phoneNumber}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Vehile Number</b>
            </p>
            <p className="text-center">{value.vehicleNumber}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Vehile Type</b>
            </p>
            <p className="text-center">{value.vehicleType}</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="text-center">
              <b>Vehile Model</b>
            </p>
            <p className="text-center">{value.vehicleType}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Check in time</b>
            </p>
            <p className="text-center"> {value.time}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Check out time</b>
            </p>
            <p className="text-center">{time}</p>
          </div>
          <div className="col">
            <p className="text-center">
              <b>Duration</b>
            </p>
            <p className="text-center">2 Hours</p>
          </div>
        </div>

        <div className="row">
            <br />
            <br />
            <br />
            <br />
          <div className="col-4"></div>
          <div className="col-1"></div>
          <div className="col">
            <div className="">
              <div
                style={{ backgroundColor: "#d5eaf2" }}
                className="text-center pb-4 mb-4"
              >
                <h5 className="pt-2">To Pay</h5>
                <h2 className="text-primary"> Rs. 80</h2>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
               <a className="btn btn-primary px-4" onClick={checkout} href="">
                Proceed to pay
              </a>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

