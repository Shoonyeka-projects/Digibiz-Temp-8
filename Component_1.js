import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_1.json'; // Assuming the JSON file is in the same directory as your component

export default class Component_1 extends Component {
  render() {
    const { carouselItems, carouselControlText } = texts;

    return (
      <div className="main_body_content">
        <div className="hero_area">
          <section className="slider_section">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail_box">
                            <h1>
                              {item.heading} <br/>
                              <span>
                                {item.subheading}
                              </span>
                            </h1>
                            <a href="#">
                              <span>
                                {item.readMoreText}
                              </span>
                              <img src={item.arrowImageSrc} alt=""/>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 ml-auto">
                          <div className="img-box">
                            <img src={item.bgImageSrc} alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel_btn-box">
                <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">{carouselControlText.prev}</span>
                </a>
                <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">{carouselControlText.next}</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
