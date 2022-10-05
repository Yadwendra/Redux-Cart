import React from "react";

function Home(props) {
  console.log("home", props);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>React-Redux</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG9P0a0LLKCMwdZfbhlacs_f1ieHDQCTmmw&usqp=CAU"
            alt="iphon"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div>
          <button
            className="addbtn"
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            {" "}
            Add To Cart
          </button>
          <button
            className="removebtn" onClick={() => {props.removeToCartHandler()}}>
            {" "}
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
