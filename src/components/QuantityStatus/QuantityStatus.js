import React from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";
import "../QuantityStatus/quantitystatus.css";
QuantityStatus.propTypes = {
  quantityCows: PropTypes.func,
  quantitySows: PropTypes.func,
};
QuantityStatus.PropDefault = {
  quantityCows: null,
  quantitySows: null,
};

function QuantityStatus(props) {
  const { quantityCows, quantitySows } = props;
  const marks = {
    100: "100",
    5000: "5000",
  };
  const handleQuantityStatusCows = (value) => {
    quantityCows(value);
  };
  const handleQuantityStatusSows = (value) => {
    quantitySows(value);
  };
  return (
    <>
      <div
        className="wrap-status"
        style={{ width: "100%", height: "50%", position: "relative" }}
      >
        {/* <p className="quantity-left">100 con</p>
        <p className="quantity-right">5000 con</p> */}
        <div className="quantity-content">
        <p className="quantity-left">100 con</p>
        <p className="quantity-right">5000 con</p>
          <h4>Bò thịt</h4>
          <Slider
            marks={marks}
            step={50}
            min={100}
            max={5000}
            tooltipVisible
            onChange={handleQuantityStatusCows}
            style={{borderRadius: "10px", padding: 0, width: "100%" }}
          />
        </div>

        <div className="quantity-content">
        <p className="quantitySows-left">100 con</p>
        <p className="quantitySows-right">5000 con</p>
          <h4>Bò nái</h4>
          <Slider
            marks={marks}
            step={50}
            min={100}
            max={5000}
            tooltipVisible
            onChange={handleQuantityStatusSows}
            style={{borderRadius: "10px", padding: 0, width: "100%" }}
          />
        </div>

       
      </div>
    </>
  );
}

export default QuantityStatus;
