// Component_7.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_7.json';

export default class Component_7 extends Component {
  render() {
    const { formSection, socialSection, menuSection, instagramSection, companySection, contactSection } = texts;

    return (
      <div className="main_body_content">
        <div className="hero_area">
          <section className="info_section layout_padding2">
            <div className="container">
              <div className="row info_form_social_row">
                <div className="col-md-8 col-lg-9">
                  <div className="info_form">
                    <form action="">
                      <input type="email" placeholder={formSection.placeholder} />
                      <button>
                        <i className={`fa ${formSection.buttonIcon}`} aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="social_box">
                    {socialSection.links.map((link, index) => (
                      <a key={index} href={link.url}>
                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row info_main_row">
                <div className="col-md-6 col-lg-3">
                  <div className="info_links">
                    <h4>{menuSection.heading}</h4>
                    <div className="info_links_menu">
                      {menuSection.links.map((link, index) => (
                        <Link key={index} to={link.url}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="info_insta">
                    <h4>{instagramSection.heading}</h4>
                    {instagramSection.images.map((image, index) => (
                      <div key={index} className="insta_box">
                        <div className="img-box">
                          <img src={image.src} alt="" />
                        </div>
                        <p>{image.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="info_detail">
                    <h4>{companySection.heading}</h4>
                    <p className="mb-0">{companySection.description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h4>{contactSection.heading}</h4>
                  <div className="info_contact">
                    {contactSection.links.map((link, index) => (
                      <Link key={index} to={link.url}>
                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                        <span>{link.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
