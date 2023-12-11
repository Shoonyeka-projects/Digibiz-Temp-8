import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_2.json'; // Assuming the JSON file is in the same directory as your component

export default class Component_2 extends Component {
  render() {
    const { aboutSection } = texts;

    return (
      <div className="main_body_content">
        <div className="hero_area">
          <section className="about_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>{aboutSection.heading}</h2>
                    </div>
                    <p>{aboutSection.content}</p>
                    <Link to="/some-page">
                      <span>{aboutSection.readMoreText}</span>
                      <img src={aboutSection.arrowImageSrc} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/about-img.png" alt="" />
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
