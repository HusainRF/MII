import React, { useState } from "react";

export default function Advisors() {
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
      <section className="zl-staff -inverse">
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
                      <img
                        src="/assets/img/staff/7.jpg?2"
                        srcSet="/assets/img/staff/7@2x.jpg?2 2x"
                        alt=""
                      />
                    </div>
                    <div className="zl-staff-item-name">
                      <h4>Greg Horowitt</h4>
                      <p>Partner, Jun Capital Management</p>
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
                  <p>
                    Greg is a Partner at Jun Capital Management in San Diego,
                    California. He is a serial entrepreneur, technology
                    investor, author, and a globally recognized pioneer in the
                    field of innovation-based economic development.
                  </p>
                  <p>
                    He has spent over 25 years working in start-ups and venture
                    capital, and has started, mentored, advised, invested in,
                    and/or served as a board member of hundreds of companies. He
                    is a visiting lecturer at Stanford University and serves as
                    the Director of Innovation at the University of California,
                    San Diego, where he also lectures.
                  </p>
                  <p>
                    Greg is the co-author of the bestselling book, The
                    Rainforest: The Secret to Building the Next Silicon Valley,
                    and is a trusted advisor to such notable organizations as
                    the US State Department, the Aspen Institute, the University
                    of California, the World Bank, and the Inter-American
                    Development Bank, in addition to being a Senior Fellow with
                    the Global Federation of Competitiveness Councils.
                  </p>
                  <p>
                    He was co-founder of Global CONNECT, which has grown to be a
                    global network of accelerator programs in over 25 countries
                    around the world.
                  </p>
                  <p>
                    Greg began his career working for the Berkshire Hathaway
                    operating company where he spent over 17 years in various
                    executive management roles before leaving to join his first
                    Silicon Valley startup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
