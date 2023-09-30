import React from "react";
import "./services.css";


let services = () => {
  return(
    <div id="servicesSection">
        <h3 className="servicesSectionHeader">Our Services</h3>
        <h6 className="serviceHeader">Strategic Consulting</h6>
        <p className="serviceText">Crafting visionary strategies that drive business growth and market leadership.</p>
        <h6 className="serviceHeader">Technology Solutions</h6>
        <p className="serviceText">Leveraging cutting-edge technology to optimize operations, improve efficiency, and enhance customer experiences.</p>
        <h6 className="serviceHeader">Financial Advisory</h6>
        <p className="serviceText">Providing expert financial guidance, risk management, and investment strategies.</p>
        <h6 className="serviceHeader">Change Management</h6>
        <p className="serviceText">Helping organizations navigate transitions and transformations with minimal disruption.</p>
        <h6 className="serviceHeader">Marketing and Sales Strategy</h6>
        <p className="serviceText">Developing powerful marketing and sales strategies that drive revenue growth and customer loyalty.</p>
        <h6 className="serviceHeader">Human Capital</h6>
        <p className="serviceText">Attracting, developing, and retaining top talent to fuel organizational success.</p>
        <h6 className="serviceHeader">Sustainability and Environmental Solutions</h6>
        <p className="serviceText">Promoting responsible business practices and sustainability initiatives.</p>
    </div>
  )
}

export default services;
