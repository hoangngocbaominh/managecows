import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Row, Typography } from "antd";
import "../FarmCost/farmcost.scss";
import "../../styles/styles.scss";
import "../OperationCost/operationcost.scss";
const { Title, Text } = Typography;

OperationCost.propTypes = {
  totalPrice: PropTypes.number,
  rates: PropTypes.number,
  titleCows: PropTypes.string,
};
OperationCost.defaultProps = {
  totalPrice: null,
  rates: null,
  titleCows: "",
};

function OperationCost(props) {
  const { totalPrice, rates, titleCows } = props;
  return (
    <>
      <Card className="shadow">
        <Row style={{justifyContent: "space-between"}}>
          <Col
            lg={12}
            sm={10}
            xs={12}
            style={{ fontSize: "20px", textAlign: "left" }}
          >
            <Text>{titleCows}</Text>
            <div style={{fontSize:"15px"}} className="rates">Tỉ giá: {rates} vnđ/ngày</div>
            
          </Col>
          <Col
            lg={12}
            sm={12}
            xs={10}
            style={{ textAlign: "right", paddingTop: "7px" }}
          >
            <Title className="title-color total-prices" level={4}>
              {totalPrice} vnđ/ngày
            </Title>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default OperationCost;
