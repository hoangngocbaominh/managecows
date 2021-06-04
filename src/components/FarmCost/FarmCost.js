import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Typography } from "antd";
import QuantityStatus from "../QuantityStatus/QuantityStatus";
import InvestmentCost from "../InvestmentCost/InvestmentCost";
import OperationCost from "../OperationCost/OperationCost";
import "../FarmCost/farmcost.scss";
import "../OperationCost/operationcost.scss";
import "../../styles/styles.scss";
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
};
function FarmCost(props) {
  const titleCows = "Bò thịt";
  const titleSows = "Bò nái";

  const {
    title,
    backgroundColor,
    ratesCows,
    ratesSows,
    investmentCost,
    totalPriceColor,
  } = props;
  const initialPriceCows = 100 * ratesCows;
  const initialPriceSows = 100 * ratesSows;
  const [totalPriceCows, setTotalPriceCows] = useState(initialPriceCows);
  const [totalPriceSows, setTotalPriceSows] = useState(initialPriceSows);

  const handleQuantityCows = (quantityCows) => {
    console.log("cows", quantityCows);
    const priceCows = quantityCows * ratesCows;
    setTotalPriceCows(priceCows);
  };

  const handleQuantitySows = (quantitySows) => {
    console.log("sows", quantitySows);
    const priceSows = quantitySows * ratesSows;
    setTotalPriceSows(priceSows);
  };
  return (
    <div style={{ backgroundColor }}>
      <div className="container">
        <div className="farm-cost">
          <Title level={4} style={{ margin: "0" }}>
            Chi phí của trang trại {title}
          </Title>
          <Title level={5} style={{ margin: "0" }}>
            Chọn số lượng bò quản lý mỗi tháng
          </Title>

          <Row>
            <QuantityStatus
              quantityCows={handleQuantityCows}
              quantitySows={handleQuantitySows}
            />
          </Row>

          <Row gutter={[24, 24]} className="operation-costs">
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
              <Title level={5}>Phí cài đặt (Thanh toán một lần duy nhất)</Title>
              <InvestmentCost investmentCost={investmentCost} />
            </Col>

            <Col lg={12} sm={24} style={{ minHeight: "100px", width: "100%" }}>
              <Title level={5}>Chi phí vận hành (Thanh toán hằng tháng)</Title>

              <Row gutter={[24, 24]}>
                <Col lg={24} sm={24} xs={24}>
                  <Title
                    className="total-price-title"
                    level={1}
                    style={{ textAlign: "left", color: totalPriceColor}}

                  >
                    +{(totalPriceSows + totalPriceCows).toLocaleString()} vnđ/ngày
                  </Title>
                </Col>
                <Col lg={24} sm={12} xs={24}>
                  <OperationCost
                    totalPrice={totalPriceCows.toLocaleString()}
                    rates={ratesCows}
                    titleCows={titleCows}
                  />
                </Col>
                <Col lg={24} sm={12} xs={24}>
                  <OperationCost
                    totalPrice={totalPriceSows.toLocaleString()}
                    rates={ratesSows}
                    titleCows={titleSows}
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
