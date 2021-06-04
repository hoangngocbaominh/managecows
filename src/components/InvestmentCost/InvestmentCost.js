import React from "react";
import PropTypes from "prop-types";
import { Typography, Card } from "antd";
import "../../styles/styles.scss";
import "../InvestmentCost/investment.scss";
const { Title } = Typography;
InvestmentCost.propTypes = {
  investmentCost: PropTypes.number,
};
InvestmentCost.defaultProps = {
  investmentCost: null,
};

function InvestmentCost(props) {
  const { investmentCost } = props;
  console.log(investmentCost);
  const investment = investmentCost.toLocaleString();
  return (
    <Card className="shadow investment-card">
      <Title level={3} className="title-color investment-content">
        {investment}/lần
      </Title>
    </Card>
  );
}

export default InvestmentCost;
