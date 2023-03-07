import React, { useState } from "react";

export default function SingleAdvisor(props) {
  const [accordion, setaccordion] = useState("zl-staff-item");

  const changeaccordion=()=>{
    if (accordion==="zl-staff-item") {
      setaccordion("zl-staff-item -active")
    }
    else{
      setaccordion("zl-staff-item")
    }
  }  
  return (
    <div>
      <section className="zl-staff">
        <div className="zl-staff-content">
          <div className="zl-staff-container">
            <div className="zl-staff-header">
              <h2>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    willChange: "auto",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                    // color:'white'
                  }}
                >
                  Advisors
                </div>
              </h2>
            </div>
            <div className="zl-staff-items">
              <div
                className={accordion}
                onClick={changeaccordion}
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                  willChange: "auto",
                }}
              >
                <div className="zl-staff-head">
                  <div className="zl-staff-info">
                    <div className="zl-staff-item-avatar">
                      <img src={props.img}  alt=""    />
                    </div>
                    <div className="zl-staff-item-name">
                      <h4>{props.name}</h4>
                      <p>{props.designation}</p>
                    </div>
                  </div>
                  <div className="zl-staff-item-icon">
                    <span>
                      <svg className="zl-svgsprite -plus">
                        <use xlinkHref="/assets/img/sprites/svgsprites.svg#plus" />
                      </svg>
                    </span>
                    <span>
                      <svg className="zl-svgsprite -minus">
                        <use xlinkHref="/assets/img/sprites/svgsprites.svg#minus" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="zl-staff-item-text">
                  <p>{props.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
