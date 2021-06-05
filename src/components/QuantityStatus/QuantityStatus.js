import React from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";
import "../QuantityStatus/quantitystatus.scss";
QuantityStatus.propTypes = {
    quantityCows: PropTypes.func,
};
QuantityStatus.PropDefault = {
    quantityCows: null,
}

function QuantityStatus(props) {
  const {quantityCows} = props;
  const marks = {
    100: "100",
    5000: "5000",
  };
  const handleQuantityStatus = (value) =>{
        quantityCows(value);
  }

  return (
    <>
      <div className="wrap-status" style={{ width: "100%", height: "50%", position: "relative" }}>
        <p className="quantity-left">100 con</p>
        <p className="quantity-right">5000 con</p>
        <Slider
          marks={marks}
          step={50}
          min={100} 
          max={5000}
          tooltipVisible
          onChange={handleQuantityStatus}
          style={{ borderRadius: "10px", padding: 0}}
        />
      </div>
    </>
  );
}

export default QuantityStatus;
