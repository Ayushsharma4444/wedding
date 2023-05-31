import React from "react";
import './pricingplan.css'
const PricingPlans = () => {
  return (
    <>
    <div className="pricing-head"><h1>Pricing <span>plan.</span></h1></div>
      <div className="parentCard py-4">
        <div className="container1">
          <div className="card">
            <h2 className="title">Starting</h2>
            <hr />
            <p className="dollar"><span className="G">$99</span> / session</p>
            <div className="items">
              <p className="p">-One ClassNameic Certified Photographer</p>
              <p className="p">- 5 Hours of Photography Coverage​ </p>
              <p className="p">- High Resolution Images</p>
              <p className="p">- Online Gallery ready within 30 Days </p>
              <p className="p" id="i">- Interest Free, Low Monthly Payment Plan​ </p>
              <span className="Order-btn">Order</span>
            </div>
          </div>
          <div className="card">
            <h2 className="title">Premium</h2>
            <hr />
            <p className="dollar"> <span className="G">$199</span> / session</p>
            <div className="items">
              <p className="p">-One ClassNameic Certified Photographer</p>
              <p className="p">- 5 Hours of Photography Coverage​ </p>
              <p className="p">- High Resolution Images</p>
              <p className="p">- Online Gallery ready within 30 Days </p>
              <p className="p" id="i">- Interest Free, Low Monthly Payment Plan​ </p>
              <span className="Order-btn">Order</span>
            </div>
          </div>
          <div className="card">
            <h2 className="title">Exclusive</h2>
            <div className="horizontal">
            <hr />
            </div>
            
            <p className="dollar"> <span className="G">$299</span> / session</p>
            <div className="items">
              <p className="p">-One ClassNameic Certified Photographer</p>
              <p className="p">- 5 Hours of Photography Coverage​ </p>
              <p className="p">- High Resolution Images</p>
              <p className="p">- Online Gallery ready within 30 Days </p>
              <p className="p" id="i">- Interest Free, Low Monthly Payment Plan​ </p>
              <span className="Order-btn">Order</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PricingPlans;
