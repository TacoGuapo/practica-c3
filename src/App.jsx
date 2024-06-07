import { useState, useEffect } from "react";
import DataWrapper from "./components/dataWrapper/dataWrapper";
import ResultWrapper from "./components/resultWrapper/resultWrapper";

const initialData = { bill: 0, tip: 0, people: 1 };
const initialTotal = { total_tip: 0, total_amount: 0};

function App() {
  const [data, setData] = useState(initialData);
  const [totals, setTotals] = useState(initialTotal);

  const handleTip = (e) => {
    const value = parseFloat(e.target.value);
    setData((prevData) => ({ ...prevData, tip: value }));
  };

  const handleReset = () => {
    setData(initialData);
    setTotals(initialTotal);
  };

  useEffect(() => {
    const { bill, tip, people } = data;
    if (bill > 0 && tip > 0 && people > 0) {
      let total_amount = (bill * (tip / 100) + bill) / people;
      let total_tip = (bill * (tip / 100)) / people;

      setTotals({ total_amount, total_tip });
    }
  }, [data]);

  return (
    <>
      <div className="general-wrapper">
        <DataWrapper data={data} setData={setData} handleTip={handleTip} />
        <ResultWrapper totals={totals} handleReset={handleReset} />
      </div>
    </>
  );
}

export default App;
