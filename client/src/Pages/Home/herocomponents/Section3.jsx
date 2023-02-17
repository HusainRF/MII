import React from "react";
import Diamond from "./Diamond/Diamond";
import "./Section3.css";
export default function Section3() {
  return (
    <section className="zl-feature">
      <div className="zl-feature-scene">
        <canvas width={294} height={294} />
      </div>
      <div
        className="zl-feature-fill"
        style={{ backgroundColor: "rgba(0, 44, 248, 0.03)" }}
      />
      <div className="feature-container">
        <div className="feature-section">
          <div className="feature-detail">
            <div className="feature-contain blue">
              <h1>Collaborative</h1>
            </div>
            <div className="feature-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Ruby-Diamond-88757.gif"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="feature-detail">
            <div className="feature-contain purple">
              <h1>Inclusive</h1>
            </div>
            <div className="feature-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Ruby-Diamond-88757.gif"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="feature-detail">
            <div className="feature-contain green">
              <h1>Innovation</h1>
            </div>
            <div className="feature-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Ruby-Diamond-88757.gif"
                alt=""
                srcset=""
              />
            </div>
          </div>
            <div className="feature-action">
              <a className="zl-btn zl-btn_cta" href="/aboutus">
                <span>About us</span>
              </a>
            </div>
        </div>
      </div>
      {/* <div className="feature-section">
        <div className="feature-content">
          <div className="feature-container">
            <div className="feature-grid">
              <div className="feature-grid-col -left">
                <div className="feature-header">
                  <h2>Collaborative</h2>
                </div>
                <div className="feature-img" style={{border: "2px solid red", width: "550px", height: "200px", background: "red"}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Ruby-Diamond-88757.gif" alt="" srcset="" />
                </div>
              </div>
              <div className="feature-grid-col -right">
                <div className="feature-img">
                  <picture>
                    <source
                      srcSet="/assets/img/feature/1.png?1"
                      media="(max-width:768px)"
                    />
                    <img
                      src="/assets/img/feature/1.png?1"
                      srcSet="/assets/img/feature/1@2x.png 2x"
                      alt=""
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="zl-feature-section -tertiary" style={{}}>
        <div className="zl-feature-content">
          <div className="zl-feature-container">
            <div className="zl-feature-grid">
              <div className="zl-feature-grid-col -left">
                <div className="zl-feature-header">
                  <h2>Inclusive</h2>
                </div>
                <div className="zl-feature-description">
                  {/* <p>Community, communication, collaboration</p> */}
                </div>
              </div>
              <div className="zl-feature-grid-col -right">
                <div className="zl-feature-img">
                  <picture>
                    <source
                      srcSet="/assets/img/feature/2.png?1"
                      media="(max-width:768px)"
                    />
                    <img
                      src="/assets/img/feature/2.png?1"
                      srcSet="/assets/img/feature/2@2x.png 2x"
                      alt=""
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zl-feature-section -primary" style={{}}>
        <div className="zl-feature-content">
          <div className="zl-feature-container">
            <div className="zl-feature-grid">
              <div className="zl-feature-grid-col -left">
                <div className="zl-feature-header">
                  <h2>Innovation</h2>
                </div>
                <div className="zl-feature-description">
                  {/* <p>Long-term viability, use cases, <br />large-scale opportunities</p> */}
                </div>
                <div className="zl-feature-action">
                  <a className="zl-btn zl-btn_cta" href="/aboutus">
                    <span>About us</span>
                  </a>
                </div>
              </div>
              <div className="zl-feature-grid-col -right">
                <div className="zl-feature-img">
                  <picture>
                    <source
                      srcSet="/assets/img/feature/3.png?1"
                      media="(max-width:768px)"
                    />
                    <img
                      src="/assets/img/feature/3.png?1"
                      alt=""
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
