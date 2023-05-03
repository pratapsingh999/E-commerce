import React from "react";
// import { Link } from "react-router-dom";
import Data from "./data.json";

function Details (){
    return(
        <>
             <div className="text">
        <h1>E-commerce web site</h1>
      </div>

      <div class="row">
    
        <div class="col-sm-4 mb-3 mb-sm-0">
          <h1 className="text3">Product information</h1>
          <div class="card1">
            <div class="card-body">
            <img src="..." class="card-img-top" alt="..."/>
              <p className="card__name">
                <span>Name</span>details
              </p>
              <p className="card__total card__small">
                <h1>{Data.name}</h1>
              </p>
              <h1>{Data.product}</h1>
              <br />
              <h1>{Data.price}</h1>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}
export default Details;