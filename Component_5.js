// Component_5.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_5.json';

export default class Component_5 extends Component {
  render() {
    const { testimonialSection, carousel } = texts;

    return (
      <div className="main_body_content">
        <section className="client_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <div className="img-box sub_img-box">
                  <img src="images/client-chocolate.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <div className="client_container">
                  <div className="heading_container">
                    <h2>{testimonialSection.heading}</h2>
                  </div>
                  <div id={carousel.id} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      {carousel.items.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <div className="box">
                            <div className="img-box">
                              <img src={item.imagePath} alt="" />
                            </div>
                            <div className="detail-box">
                              <h4>{item.name}</h4>
                              <p>{item.content}</p>
                              <i className="fa fa-quote-left" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="carousel_btn-box">
                      <a
                        className="carousel-control-prev"
                        role="button"
                        data-slide="prev"
                        href={`#${carousel.id}`}
                      >
                        <i className={`fa ${carousel.buttons.prev.icon}`} aria-hidden="true"></i>
                        <span className="sr-only">{carousel.buttons.prev.ariaLabel}</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        role="button"
                        data-slide="next"
                        href={`#${carousel.id}`}
                      >
                        <i className={`fa ${carousel.buttons.next.icon}`} aria-hidden="true"></i>
                        <span className="sr-only">{carousel.buttons.next.ariaLabel}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
