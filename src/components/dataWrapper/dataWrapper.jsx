

function DataWrapper({ data, setData, handleTip }) {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input
          onChange={(e) => setData({ ...data, bill: parseFloat(e.target.value) })}
          className="input-bill"
          id="input-bill"
          type="number"
          min="0"
          value={data.bill || 0}
        />
      </label>
      <h2>Select Tip %</h2>
      <ul onClick={handleTip}>
        <li id="percentage5">
          <button
            type="button"
            className={`percentage-button ${data.tip === 5 && 'active'}`}
            value="5"
          >
            5%
          </button>
        </li>
        <li id="percentage10">
          <button
            type="button"
            className={`percentage-button ${data.tip === 10 && 'active'}`}
            value="10"
          >
            10%
          </button>
        </li>
        <li id="percentage15">
          <button
            type="button"
            className={`percentage-button ${data.tip === 15 && 'active'}`}
            value="15"
          >
            15%
          </button>
        </li>
        <li id="percentage25">
          <button
            type="button"
            className={`percentage-button ${data.tip === 25 && 'active'}`}
            value="25"
          >
            25%
          </button>
        </li>
        <li id="percentage50">
          <button
            type="button"
            className={`percentage-button ${data.tip === 50 && 'active'}`}
            value="50"
          >
            50%
          </button>
        </li>

        <li>
          <input
            onChange={(e) => setData({ ...data, tip: parseFloat(e.target.value) })}
            type="number"
            placeholder="Custom"
            id="customPercentageButton"
            className="custom-button"
          />
        </li>
      </ul>
      <h2>Number of People<span id="alert"></span></h2>
      <label htmlFor="input-people">
        <input
          onChange={(e) => setData({ ...data, people: parseFloat(e.target.value) })}
          id="input-people"
          className="input-people"
          type="number"
          min="1"
          value={data.people || 1}
        />
      </label>
    </div>
  );
}

export default DataWrapper;
