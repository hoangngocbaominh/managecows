import React from "react";
import { Typography, Steps } from "antd";
import "../styles/methodpayment.css";
import useMediaQuery from "use-media-antd-query";

const { Title } = Typography;
const { Step } = Steps;


function PaymentMethod(props) {
  const colSize = useMediaQuery();

  return (
    <div id="methodpayment" className="method-payment">
      <div className="container">
        <Title level={3}>Cách thức thanh toán đơn giản</Title>
        <Steps
          progressDot
          current={4}
          direction={["xs", "sm", "md"].includes(colSize) ? "vertical" : "horizontal"}
        >
          <Step
            title="Cuối tháng"
            description="Hệ thống xuất báo cáo năng xuất bò trong tháng"
          />
          <Step
            title="+1 ngày"
            description="Hệ thống gửi hóa đơn thanh toán cho khách hàng qua email"
          />
          <Step title="+7 ngày" description="Thời gian khách hàng thanh toán" />
          <Step
            title="+99 ngày"
            description="Hệ thống gửi xác nhận thanh toán email cho khách hàng"
          />
        </Steps>
        <div style={{ textAlign: "left", marginTop: "25px", height: "200px" }}>
          <h2>Chuyển khoản qua ngân hàng</h2>
          <h3 style={{fontWeight:"bold"}}>STK: 123456789</h3>
          <h3>Ngân hàng: PVcom bank</h3>
          <h3>Người thụ hưởng: Công ty Cổ phần MTV</h3>
          <h3>
            Nội dung thanh toán: [Mã trang trại] - [Tên chủ trại đăng ký] thanh
            toán phí hoạt động của trang trại [tháng]
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
