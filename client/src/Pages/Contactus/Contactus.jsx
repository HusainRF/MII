import React from 'react'
import './contactus.css'
export default function Contactus() {
  return (
    // <div className='contactus-page'>
    //   <div >
    //   <div className='lets-talk'>Let's talk</div>
    //   <div style={{fontSize:"30px"}}>Get in touch</div>
      
    //   <div className='zl-input_light'>
    //   <input type="text" placeholder="Name"/>

    //   </div>
      


    //   </div>
    // </div>

    <div className="zl-contact-content -it">
    <div className="zl-contact-container">
      <div className="zl-contact-header">
        <h1 style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>Let’s talk</h1>
      </div>
      <div className="zl-contact-subtitle" style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
        <h2>Get in touch</h2>
      </div>
      <div className="zl-contact-form">
        <form className="zl-form">
          <div className="zl-form-grid">
            <div className="zl-form-grid-col">
              <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
                <div className="zl-input zl-input_light"><input type="text" placeholder="Name" /></div>
              </div>
            </div>
            <div className="zl-form-grid-col">
              <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
                <div className="zl-input zl-input_light"><input type="email" placeholder="Email" /></div>
              </div>
            </div>
          </div>
          <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-input zl-input_light"><input type="text" placeholder="Telegram" /></div>
          </div>
          <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-input zl-input_light"><input type="text" placeholder="Project name" /></div>
          </div>
          <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-input zl-input_light"><textarea placeholder="The Big Idea" style={{overflow: 'hidden', overflowWrap: 'break-word', height: '41px'}} defaultValue={""} /></div>
          </div>
          <div className="zl-form-group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-input zl-input_light"><textarea placeholder="Reason for reaching out" style={{overflow: 'hidden', overflowWrap: 'break-word', height: '41px'}} defaultValue={""} /></div>
          </div>
          <div className="zl-form-group" style={{zIndex: 50, translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-select zl-select_light">
              <select data-placeholder="Timezone" data-select2-id="select2-data-1-04ua" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true">
                <option data-select2-id="select2-data-3-kber" />
                <option>ACST Australian Central Time (UTC + 9: 30)</option>
                <option>AEST Eastern Australian Time (UTC + 10)</option>
                <option>AKST Alaska Time (UTC - 9)</option>
                <option>AST Atlantic Time (UTC - 4)</option>
                <option>AWST Western Australian Time (UTC + 8)</option>
                <option>CAT Central African Time (UTC + 2)</option>
                <option>CET Central European Time (UTC + 1)</option>
                <option>CST Central American Time (UTC - 6)</option>
                <option>EAT East African time (UTC + 3)</option>
                <option>EET Eastern European Time (UTC + 2)</option>
                <option>EST Eastern American Time (UTC - 5)</option>
                <option>GMT Greenwich Mean Time (UTC)</option>
                <option>HAST Hawaiian Aleutian time (UTC - 10)</option>
                <option>MSK Moscow time (UTC + 3)</option>
                <option>MST Mountain Time (UTC - 7)</option>
                <option>NST Newfoundland Time (UTC - 3:30)</option>
                <option>PST North American Pacific Time (UTC - 8)</option>
                <option>UTC Coordinated Universal Time (UTC)</option>
                <option>WAT West African time (UTC + 1)</option>
                <option>WET Western European Time (UTC)</option>
              </select>
              <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-wzt0" style={{width: '314px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-atfn-container" aria-controls="select2-atfn-container"><span className="select2-selection__rendered" id="select2-atfn-container" role="textbox" aria-readonly="true" title="Timezone"><span className="select2-selection__placeholder">Timezone</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
          </div>
          <div className="zl-form-label">Current Team Size</div>
          <div className="zl-checkbox-group" style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
            <div className="zl-checkbox zl-checkbox_rounded"><label><input type="radio" name="team" defaultValue="1-5 people" /><span className="zl-checkbox_rounded-box"><span className="zl-checkbox_rounded-title"><span data-text="1-5 people">1-5 people</span></span><span className="zl-checkbox_rounded-ripple"><span /></span></span></label></div>
            <div className="zl-checkbox zl-checkbox_rounded"><label><input type="radio" name="team" defaultValue="5-25 people" /><span className="zl-checkbox_rounded-box"><span className="zl-checkbox_rounded-title"><span data-text="5-25 people">5-25 people</span></span><span className="zl-checkbox_rounded-ripple"><span /></span></span></label></div>
            <div className="zl-checkbox zl-checkbox_rounded"><label><input type="radio" name="team" defaultValue=">25 people" /><span className="zl-checkbox_rounded-box"><span className="zl-checkbox_rounded-title"><span data-text=">25 people">&gt;25 people</span></span><span className="zl-checkbox_rounded-ripple"><span /></span></span></label></div>
          </div>
          <div className="zl-form-submit" style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}><button className="zl-btn zl-btn_rounded" type="submit"><span>Send</span></button></div>
          <div className="zl-form-terms" style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}><a>Privacy Policy</a> and <a>Terms of Service</a> apply</div>
        </form>
      </div>
    </div>
  </div>
  )
}
