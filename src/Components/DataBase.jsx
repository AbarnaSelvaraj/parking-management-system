import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


function DataBase() {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  useEffect(() => {
    const val = JSON.parse(sessionStorage.getItem("value"));
    if(val == null) 
      sessionStorage.setItem("value", "[]");
    setValues(val);
  }, []);

  const remove = index => {
    sessionStorage.setItem("remove", String(index));
    navigate("/check-out");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row py-4">
          <div className="col-3 text-start h3 ">Dashboad</div>
          <div className="col-8">
            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a className="btn btn-outline-primary" href="/add">
                +CheckIn
              </a>
            </form>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr className="text-info bg-dark">
              <th scope="col">Vehicle No</th>
              <th scope="col">Vehicle Mode</th>
              <th scope="col">Vehicle Type</th>
              <th scope="col">Phone</th>
              <th scope="col">Check In</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {values.map((item, index) => (
              <tr key={index}>
                <th> {item.vehicleNumber} </th>
                <td>{item.vehicleModel}</td>
                <td>
                  <a className="btn btn-warning text-danger">
                    {item.vehicleType}
                  </a>
                </td>
                <td>{item.phoneNumber}</td>
                <td>{item.time}</td>
                <td className="text-info" onClick={(e) => remove(index)}>Check out</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataBase;
