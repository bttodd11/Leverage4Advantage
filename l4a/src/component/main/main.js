import React from "react";
import TypeIt from "typeit-react";
import "./main.css";

const main = () => {

  return (
    <div id="mainSection">
      <div className="mainContent">
    <p className="mainContentText"><span className="levTitle">Leverage</span><span className="levNoun">Noun</span></p>
    <p className="mainContentSubText">le·​ver·​age - [ <span style={{color: "#EB729A",fontWeight: "900"}}>lev</span>-er-ij, <span>lee</span>-ver- ]</p>

    <TypeIt options={{
      strings:["1 : The strategic use of an existing resource, asset, knowledge, or relationships to achieve goals more efficiently or gain a competitive edge."],
      lifeLike: true,
      speed: 25,
      afterComplete: function (instance) {
      instance.destroy();
    }}}
    className="mainContentP"></TypeIt>
    </div>
    </div>
  );
}

export default main;