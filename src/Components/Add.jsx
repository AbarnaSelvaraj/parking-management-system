import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

  const [vehicleNumber, setVehicleNumber] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [vehicleModel, setVehicleModel] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [customerName, setCustomerName] = useState();

  const clearFields = () => {
    setVehicleNumber("");
    setVehicleType();
    setVehicleModel();
    setPhoneNumber();
    setCustomerName();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      clearFields();
      let values = sessionStorage.getItem("value");
      if(values == null) 
        values = []
      else 
        values = JSON.parse(values);
        let d = new Date();
      let time = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
      values = [...values,{
        vehicleNumber: vehicleNumber,
        vehicleType: vehicleType,
        vehicleModel: vehicleModel,
        phoneNumber: phoneNumber,
        customerName: customerName,
        time: time
      }]
      // console.log(values);
      sessionStorage.setItem("value", JSON.stringify(values));
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <p className="text-start h1 p-4 m-2">Vehile check-In</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3 form-label" for="VehicleNumber">
                <p className="h3">Vehicle Number</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Vehicle Number"
                onChange={(e) => setVehicleNumber(e.target.value)}
              />
            </div>

            <div className="col-5 p-2 m-3">
              <label className="h3 form-label" for="VehicleType" >
                <p className="h3">Vehicle Type</p>
              </label>
              <select
                className="form-select form-select-lg h3"
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option className="h3" selected>
                  Open this select menu
                </option>
                <option className="h3" value="2 Wheeler">
                  2 Wheeler
                </option>
                <option className="h3" value="4 Wheeler">
                  4 Wheeler
                </option>
                <option className="h3" value="Multi Wheeler">
                  Multi Wheeler
                </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3 form-label" for="VehicleModel" >
                <p className="h3">Vehicle Model</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Vehicle Model"
                onChange={(e) => {
                  setVehicleModel(e.target.value);
                }}
              />
            </div>

            <div className="col-5 p-2 m-2">
              <label className="h3 form-label" for="PhoneNumber">
                <p className="h3">Phone Number</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3 form-label" for="CustomerName">
                <p className="h3">Customer Name</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter name"
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary position-absolute bottom-10 start-50 translate-middle"
            type="submit"
          >
            Check In
          </button>
        </form>
      </div>
    </div>
  );
}
