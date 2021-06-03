import "./App.css";
import "antd/dist/antd.css";
import FarmCost from "./components/FarmCost/FarmCost";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
function App() {
  const titleFarmCost = "cơ bản";
  const titleAdvanceFarmCost = "nâng cao";
  const backgroundColor = "#8dc63f";
  const width = "100%";
  const ratesNomalCows = 68;
  const ratesAdvanceCows = 68;
  const ratesNomalSows = 116;
  const ratesAdvanceSows = 116;
  const backGroundStatus = "white";
  const investmentCost = 20000000;
  const investmentCostAdvance = 40000000;
  const totalPriceColor = "#8dc63f";
  const totalPriceColorNomalFarm = "#ffffff";
  return (
    <div className="App app-general">
      <FarmCost
        title={titleFarmCost}
        ratesCows={ratesNomalCows}
        ratesSows={ratesNomalSows}
        investmentCost={investmentCost}
        totalPriceColor={totalPriceColor}
    
      />
      <FarmCost
        title={titleAdvanceFarmCost}
        backgroundColor={backgroundColor}
        width={width}
        backGroundStatus={backGroundStatus}
        ratesCows={ratesAdvanceCows}
        ratesSows={ratesAdvanceSows}
        investmentCost={investmentCostAdvance}
        totalPriceColor={totalPriceColorNomalFarm}
      />
        <PaymentMethod />
    </div>
  );
}

export default App;
