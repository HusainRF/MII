import React, { useEffect, useState } from "react";
import Diamond from "./Diamond/Diamond";
import Section13 from "./Section13";
import "./Section3.css";

export default function Section3() {
  return (
    <section className="zl-feature" id="checkht">
      
      <div className="zl-feature-scene">  
        <canvas width={294} height={294} />
      </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <div>
      <Section13/>
      </div>  
      <div style={{paddingTop:"300px"}}>
      <Diamond/>
      </div>
      </div>
    </section>
  );
}
