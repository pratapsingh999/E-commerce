import React from "react";
import Data from "./data.json";
// import Details  from "./details";
import { Link } from "react-router-dom";



function Website() {
  // const [showdetails, setshowdetails] = useState("");
//   const hendalclick = () => {
//   };
  return (
    <>
      {Data.map((post) => {
        return (
          <div class="row">
            <div className="card">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Product details</h5>
                  <h1>{post.name}</h1>
                  <h1>{post.sku}</h1>
                  <h1>{post.price}</h1>
                  <Link to = "/details element">showdetails</Link>
                  {/* <button className="btn btn-warning" onClick={hendalclick}>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Website;
