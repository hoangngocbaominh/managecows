import "./App.css";
import "antd/dist/antd.css";
import FarmCost from "./components/FarmCost/FarmCost";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
function App() {
  const titleFarmCost = "cơ bản";
  const titleAdvanceFarmCost = "nâng cao";
  const backgroundColor = "#8dc63f";
  const width = "100%";
  const ratesNomalCows = 70;
  const ratesAdvanceCows = 80;
  const ratesNomalSows = 115;
  const ratesAdvanceSows = 125;
  const backGroundStatus = "white";
  const investmentCost = 20000000;
  const investmentCostAdvance = 40000000;
 
  return (
    <div className="App app-general">
      <FarmCost
        title={titleFarmCost}
        ratesCows={ratesNomalCows}
        ratesSows={ratesNomalSows}
        investmentCost={investmentCost}
        
      />
      <FarmCost
        title={titleAdvanceFarmCost}
        backgroundColor={backgroundColor}
        width={width}
        backGroundStatus={backGroundStatus}
        ratesCows={ratesAdvanceCows}
        ratesSows={ratesAdvanceSows}
        investmentCost={investmentCostAdvance}
      />
        <PaymentMethod />
    </div>
  );
}

export default App;
