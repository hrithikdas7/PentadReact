import React from 'react';
import './ChooseFromProducts.css'

const ChooseFromProducts = () => {
  return (
    <div id="page2">
      <div>
        <h1 className="page2heading">Choose From Products</h1>
      </div>
      <div className="button-navigation">
        <div className="button-container">
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/equity-2.svg" alt="Equity" />
            Equity
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/mutual-funds-1.svg" alt="Mutual Funds" />
            Mutual Funds
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/future-and-option.svg" alt="Future and Option" />
            Future and Option
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/fixed-deposit.svg" alt="Fixed Deposit" />
            Fixed deposit
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/bonds.svg" alt="Bonds" />
            Bonds
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/ulisted_shares.svg" alt="Unlisted Shares" />
            Unlisted Shares
          </button>
          <button className="button1">
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/exchange-traded-funds-2.svg" alt="Exchange Traded Funds" />
            Exchange Traded Funds
          </button>
        </div>
      </div>
      <br /><br /><br />
      <div className="content">
        <div className="left1">
          <img className="image" src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/Mutual-Funds-min-1-1.png.webp" alt="Product Image" />
        </div>
        <br /><br />
        <div className="right1">
          <h2>Simple Wealth Creation Product</h2>
          <button className="button">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseFromProducts;
