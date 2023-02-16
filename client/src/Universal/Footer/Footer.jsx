import React from "react";
import Copyright from "./Copyright";
import "./footer.css";
export default function Footer() {
  return (
    // <div className='footer-box'>
    //     <h1>Want to Know More?</h1>
    //     <u style={{color:"green"}}><h1>Get in Touch</h1></u>

    //     <div className='footer-bottom'>
    //         <div className='bootom-firstline'>
    //           <div>
    //         <img src='./images/medicaps.png' alt='' width={"120px"}/>
    //         <img src='./images/25year.png' alt='' width={"100px"}/>
    //         </div>
    //         <div className='footer-pages'>
    //         <h6>Home</h6>
    //         <h6>Our Offerings</h6>
    //         <h6>Blogs</h6>
    //         <h6>Events</h6>
    //         </div>
    //         </div>
    //         <div className='social-icons'>
    //         <i class="fa-brands fa-facebook"></i>
    //         <i class="fa-brands fa-instagram"></i>
    //         <i class="fa-brands fa-twitter"></i>
    //         </div>
    //     </div>
    //     <Copyright/>
    // </div>
    <section className="zl-outro">
        <div className="zl-outro-content">
          <div className="zl-outro-container">
            <div className="zl-outro-header">
              <h2>Want to know more?</h2>
              <a href="/contactus">Get in touch</a>
            </div>
            <div className="zl-outro-footer">
              <div className="zl-outro-grid">
                <div className="zl-outro-grid-col -left">
                  <div className="zl-outro-logo"><img src="/assets/img/logo-i.png" srcSet="/assets/img/logo-i@2x.png 2x" alt="" /></div>
                </div>
                <div className="zl-outro-grid-col -right">
                  <div className="zl-outro-navs"><a className="zl-outro-nav" href="/"><span>Home</span></a>
                  <a className="zl-outro-nav" href="/ourofferings"><span>Services</span></a>
                  <a className="zl-outro-nav" href="/aboutus"><span>About Us</span></a>
                  <a className="zl-outro-nav" href="/blogs"><span>Blog</span></a></div>
                  <div className="zl-outro-socials">
                    <a className="zl-outro-social -instagram" href="https://unizen-io.medium.com/" target="_blank" rel="noopener" aria-label="Medium">
                      <span>
                        <svg className="zl-svgsprite -medium">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#medium" />
                        </svg>
                      </span>
                    </a>
                    <a className="zl-outro-social -facebook" href="https://t.me/unizen_io" target="_blank" rel="noopener" aria-label="Telegram">
                      <span>
                        <svg className="zl-svgsprite -telegram">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#telegram" />
                        </svg>
                      </span>
                    </a>
                    <a className="zl-outro-social -twitter" href="https://twitter.com/unizen_io" target="_blank" rel="noopener" aria-label="Twitter">
                      <span>
                        <svg className="zl-svgsprite -twitter">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#twitter" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
