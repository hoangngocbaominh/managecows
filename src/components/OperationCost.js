import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Row, Typography } from "antd";
import "../styles/farmcost.css";
import "../styles/shadow.css";

const { Title, Text } = Typography;

OperationCost.propTypes = {
  totalPrice: PropTypes.number,
  rates:PropTypes.number
};
OperationCost.defaultProps = {
  totalPrice: null,
  rates:null,
}

function OperationCost(props) {
  const { totalPrice, rates } = props;
  return (
    <>
      <Card className="shadow">
        <Row>
          <Col
            lg={10}
            sm={6}
            xs={10}
            style={{ fontSize: "20px", textAlign: "left" }}
          >
            <Text>Bò thịt</Text>
          </Col>
          <Col lg={14} sm={18} xs={14} style={{ textAlign: "right", paddingTop: "7px" }}>
            <Text style>Tỉ giá: {rates} đồng/con/ngày</Text>
            <Title level={4}>{totalPrice} vnđ/ngày</Title>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default OperationCost;
