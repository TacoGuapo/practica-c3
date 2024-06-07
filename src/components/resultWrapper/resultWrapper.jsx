function ResultWrapper({ totals, handleReset }) {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="tip-amount">{totals.total_tip}</span></h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="total">{totals.total_amount}</span></h3>
        </div>
      </div>
      <button type="button" className="reset-button" onClick={handleReset}>RESET</button>
    </div>
  );
}

export default ResultWrapper;
