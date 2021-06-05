import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Typography } from "antd";
import QuantityStatus from "../QuantityStatus/QuantityStatus";
import InvestmentCost from "../InvestmentCost/InvestmentCost";
import OperationCost from "../OperationCost/OperationCost";
import "../FarmCost/farmcost.scss";
import { Link } from "react-scroll";
const { Title } = Typography;
FarmCost.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  ratesCows: PropTypes.number,
  ratesSows: PropTypes.number,
  investmentCost: PropTypes.number,
};
FarmCost.defaultProps = {
  title: "",
  backgroundColor: "",
  ratesCows: null,
  ratesSows: null,
  investmentCost: null,
}
function FarmCost(props) {
  const titleCows = "Bò thịt";
  const titleSows = "Bò nái";  

  const { title, backgroundColor, ratesCows, ratesSows, investmentCost} = props;
  const initialPriceCows = (100 * ratesCows).toLocaleString();
  const initialPriceSows = (100 * ratesSows).toLocaleString();
  const [totalPriceCows, setTotalPriceCows] = useState(initialPriceCows);
  const [totalPriceSows, setTotalPriceSows] = useState(initialPriceSows);

  const handleQuantityCows = (quantityCows) => {
    const priceCows = quantityCows * ratesCows;
    const priceSows = quantityCows * ratesSows;
    const formatPriceCows = priceCows.toLocaleString();
    const formatPriceSows = priceSows.toLocaleString();
    setTotalPriceCows(formatPriceCows);
    setTotalPriceSows(formatPriceSows);
  };

  return (
    <div style={{ backgroundColor }}>
      <div className="container">
        <div className="farm-cost" style={{}}>
          <Title level={4} style={{ margin: "0" }}>
            Chi phí của trang trại {title}
          </Title>
          <Title level={5} style={{ margin: "0" }}>
            Chọn số lượng bò quản lý mỗi tháng
          </Title>

          <Row>
            <QuantityStatus quantityCows={handleQuantityCows}  />
          </Row>

          <Row gutter={[24, 24]}>
            <Col
              lg={12}
              sm={24}
              style={{
                minHeight: "100px",
                width: "100%",
                display: "flex",
                flexFlow: "column",
              }}
            >
              <Title className="operation-costs" level={4}>
                Chi phí vận hành hàng ngày
              </Title>
              <InvestmentCost investmentCost={investmentCost}/>
            </Col>

            <Col lg={12} sm={24} style={{ minHeight: "100px", width: "100%" }}>
              <Title className="operation-costs" level={4}>
                Chi phí vận hành hàng ngày
              </Title>

              <Row gutter={[24, 24]}>
                <Col lg={24} sm={12} xs={24}>
                  <OperationCost
                    totalPrice={totalPriceCows}
                    rates={ratesCows}
                    titleCows = {titleCows}
                  />
                </Col>
                <Col lg={24} sm={12} xs={24}>
                  <OperationCost
                    totalPrice={totalPriceSows}
                    rates={ratesSows}
                    titleCows = {titleSows}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Link
            to="methodpayment"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              style={{
                marginTop: "3%",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#eded00",
                color: "black",
              }}
            >
              Cách thức thanh toán
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FarmCost;
