import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Facebook from '../images/facebook.svg';
import LinkedIn from '../images/linkedin.svg';
import Pinterest from '../images/pinterest.svg';
import Email from '../images/email.svg';
import MediaComponent from '../components/media.component'

export default class Footer extends Component {
  
    render() {
        return (
            <div className = "footer">
              <div className = "container-fluid">

                <div className = "row">
                  <div className = "media-links">
                    <MediaComponent key="media001" name="facebook" imgSvg={Facebook} />
                    <MediaComponent key="media002" name="linkedin" imgSvg={LinkedIn} />
                    <MediaComponent key="media003" name="pinterest" imgSvg={Pinterest} />
                    <MediaComponent key="media004" name="email-icon" imgSvg={Email} />
                  </div>
                </div>
        
                <div className = "row">
                  <div className = "col-sm-6 col-md-6 text-right">
                    <div className = "personal-contact phone">
                      <h4>Phone: XXXXXX</h4>
                    </div>
                  </div>
        
                  <div className = "col-sm-6 col-md-6 text-left">
                    <div className = "personal-contact email-personal-contact">
                      <h4>Email: XXXXX@gmail.com</h4>
                    </div>
                  </div>
                </div>
        
                <div className = "row">
                  <div className = "col-sm-4 col-md-4 text-center">
                    <div className = "company-information">
                      <h3>XXXX</h3>
                      <h4>Copyright &copy; 2021</h4>
                      <h4>NY</h4>
                    </div>
                  </div>
        
                  <div className = "col-sm-2 col-md-2 text-center">
                    <div className = "home-footer">
                      <h4><Link to='/'>Home</Link></h4>
                    </div>
                  </div>
        
                  <div className = "col-sm-2 col-md-2 text-center">
                    <div className = "portfolio-footer">
                      <h4><Link to='/portfolio'>Portfolio</Link></h4>
                      <ul>
                        <li><a href = "#">Project1</a></li>
                        <li><a href = "#">Project2</a></li>
                        <li><a href = "#">Project3</a></li>
                        <li><a href = "#">See All</a></li>
                      </ul>
                    </div>
                  </div>
        
                  <div className = "col-sm-2 col-md-2 text-center">
                    <div className = "resume-footer">
                      <h4><a href = "#">Resume</a></h4>
                      <ul>
                        <li><a href = "#">Download</a></li>
                      </ul>
                    </div>
                  </div>
        
                  <div className = "col-sm-2 col-md-2 text-center">
                    <div className = "contact-footer">
                      <h4><Link to='/contact'>Contact</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
