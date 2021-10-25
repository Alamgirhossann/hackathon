import React, { useContext } from "react";
import { UseContext } from "../../App";

const SearchResult = () => {
  const { result } = useContext(UseContext);
  console.log(result);
  return (
    <div className="py-3">
      <div
        className="container"
        style={{
          background: "linear-gradient(70deg,#0fe728, #2BDE8C )",
          padding: "10px 0px",
          borderRadius:"10px",
          color:"white"
        }}
      >
        <h4 class="card-title text-center">User Information</h4>
      </div>
      {result.map((result) => (
        <div className="container-fluid bg">
          <div className="d-flex justify-content-center pt-4">
            <div
              class="card text-white"
              style={{
                width: "48rem",
                borderRadius: "20px",
                background: "linear-gradient(70deg, #2BDE8C, #0fe728)",
              }}
            >
              <div
                class="card-body"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                <p class="card-text">
                  Name : <i>{result.PersonName}</i>
                </p>
                <p class="card-text">
                  Car model : <i>{result.Carmodel}</i>
                </p>
                <p class="card-text">
                  Car submodel : <i>{result.CarSubmodel}</i>
                </p>
                <p class="card-text">
                  Phone Number : <i>{result.PhoneNumbers}</i>
                </p>
                <p class="card-text">
                  Address : <i>{result.Addresses}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
