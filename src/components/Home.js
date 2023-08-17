import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="item-conatiner">
        <div className="item-img">
          <img
            src="https://img.giznext.com/assets/model/2/11245/apple-iphone-13-86392669469042bb60d485f764c68d.jpg?width=360"
            alt="img"
          />
        </div>
        <div className="item-details">
          <p>Iphone 12</p>

          <p>
            Price : <span>$1200</span>
          </p>
        </div>
        <div className="btn-add-to-cart">
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="cart-img">
        <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg" />
        <h6 className="item-number">1</h6>
      </div>
    </div>
  );
};

export default Home;
