import React from 'react';
import './Footer.css' ;

const Footer = () => {
  return (
    <footer className="container">
      <div className="footermod">
        <div className="footersection footersection1">
          <img src="https://www.pentadsecurities.com/static/media/main_logo.e25b3d49fea3aafefb995baa84be4516.svg" alt="Logo" />
          <p>33/2361 B4, 3rd Floor, Jacob’s Building, Geethanjali Junction, Vyttila, Kochi 682019, Kerala, India.</p>
          <span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
        <div className="footersection">
          <h3>Platforms</h3>
          <div>
            <a className="span1">Pen</a>
            <a className="span1">Book</a>
            <a className="span1">Box</a>
            <a className="span1">Evoting</a>
            <a className="span1">Pen API Link</a>
          </div>
        </div>
        <div className="footersection">
          <h3>Quick Link</h3>
          <div>
            <a className="span1">About Us</a>
            <a className="span1">Blog</a>
            <a className="span1">Contact us</a>
            <a className="span1">Branch Login</a>
            <a className="span1">Downloads</a>
            <a className="span1">NRI Investment</a>
            <a className="span1">FAQ</a>
          </div>
        </div>
        <div className="footersection">
          <h3>Legal</h3>
          <div>
            <a className="span1">AML Policy</a>
            <a className="span1">Terms and Conditions</a>
            <a className="span1">Privacy Policy</a>
            <a className="span1">Updation Provision</a>
            <a className="span1">General Disclaimer</a>
            <a className="span1">Investor Grievances</a>
            <a className="span1">Regulator KYC Policies</a>
          </div>
        </div>
        <div className="footersection">
          <h3>Useful Links</h3>
          <div>
            <a className="span1">BSE</a>
            <a className="span1">NSE</a>
            <a className="span1">CDSL</a>
            <a className="span1">RBI</a>
            <a className="span1">NSDL</a>
            <a className="span1">SEBI</a>
            <a className="span1">MCX</a>
          </div>
        </div>
      </div>
      <div className="horizontal-container">
        <div className="flexed">
          <span className="span1">Project:
            <a className="span1">Equity |</a>
            <a className="span1">Mutual Funds |</a>
            <a className="span1">Future & Option |</a>
            <a className="span1">Fixed Deposit |</a>
            <a className="span1">Bonds |</a>
            <a className="span1">Unlisted Shares |</a>
            <a className="span1">Exchange Traded Funds |</a>
            <a className="span1">NRI Investment |</a>
          </span>
          <hr className="horizontal-line" />
          <p className="span1">Pentad Securities Private Ltd. SEBI Regn.No - INZ000168432, Mutual Fund ARN - 120781,
            CDSL Regn.No - IN-DP-378-2018 , CIN – U67120KL2012PTC032847. Pentad Securities offers goal-based broking /
            non-broking services that aim to empower its clients through saving, investing, protecting, and transforming
            their money for their wealth creation via various financial services and products like Mutual Funds, SIP,
            Equity, Gold, Commodities, Currency, etc. as a registered trading member/distributor. Investments in
            securities market are subject to market risks, read all the related documents carefully before investing and
            there is no assurance or guarantee of the returns</p>
          <hr className="horizontal-line" />
          <p className="span1">2023 © Pentad Securities Private Limited. All rights reserved</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
