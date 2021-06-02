import React from "react";
import PropTypes from "prop-types";
import { Typography, Card } from "antd";
import "../../styles/shadow.css";
const { Title } = Typography;
InvestmentCost.propTypes = {
  investmentCost: PropTypes.number,
};
InvestmentCost.defaultProps = {
  investmentCost: null,
};

function InvestmentCost(props) {
  const {investmentCost} = props;
  console.log(investmentCost)
  const investment = investmentCost.toLocaleString();
  return (
    <Card
      className="shadow"
      style={{ width: "100%", height: "100%", position: "relative", flex: 1}}
    >
      <Title
        level={3}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "38px",
          transform: `translate(${-50}%, ${-50}%)`,
        }}
      >
       {investment}/lần
      </Title>
    </Card>
  );
}

export default InvestmentCost;
