import React, { useContext, useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchingUi.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { UseContext } from "../../App";

const SearchingUi = () => {
  const {result, setResult} = useContext(UseContext)
  const history = useHistory();
  const token = Cookies.get("user_token");
  const apiUrl = "http://127.0.0.1:8000/";
  const [customSearch, setCustomSearch] = useState({
    location: "",
    car: "",
  });
  function submitPlace(e) {
    setCustomSearch({ ...customSearch, location: e.target.value });
    console.log("Printing Place", customSearch.location);
  }

  function submitCar(e) {
    setCustomSearch({ ...customSearch, car: e.target.value });
    console.log("Printing Car", customSearch.car);
  }
  const openSearchResult = () =>{
    history.push({
      pathname: "/searchResult",
    })
  }
  async function Search_result(e) {
    e.preventDefault();
    console.log("Inside search result");
    const response = await fetch(
      apiUrl + `search/${customSearch.location}/${customSearch.car}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let json_res = await response.json();
    setResult(json_res);
    openSearchResult();
  }
  return (
    <div className="main-container">
      <div class="container-fluid">
        <div>
          <nav class="navbar navbar-expand-lg navbar-light">
            <a
              class="navbar-brand"
              style={{
                background: "linear-gradient(70deg, #2BDE8C, #0fe728)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                fontSize: "30px",
                fontWeight: "600",
              }}
              href="/"
            >
              <img src="images/favicon.ico" alt="" />
              Cars Bazar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img src="images/toggler-icon.svg" alt="" />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link text-white mr-4" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white mr-4" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white mr-4" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main class=" mt-5 pt-5">
            <div class="search-bar col-md-6 mx-auto ">
              <h1 class="text-center">Search for Your Desire Cars</h1>
              <form onSubmit={Search_result}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input-style"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your desire car name"
                    required
                    onChange={submitCar}
                    value={customSearch.car}
                    onBlur={submitCar}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input-style"
                    id="exampleInputPassword1"
                    placeholder="Enter location"
                    required
                    onChange={submitPlace}
                    value={customSearch.location}
                    onBlur={submitPlace}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-100 mt-3 btn-style"
                >
                  Submit
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
      <div>
        {/* {result.length === 0 ?<p className='text-danger'>loding...</p>
        : <div>
          {result.map((result) => (
          <SearchResult result={result}></SearchResult>
        ))}
        </div>
        }
         */}
      </div>
    </div>
  );
};

export default SearchingUi;
