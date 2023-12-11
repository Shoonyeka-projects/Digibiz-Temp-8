// Component_4.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_4.json';

export default class Component_4 extends Component {
  render() {
    const { offerSection, seeMoreLink } = texts;

    return (
      <section className="offer_section layout_padding">
        <div className="container">
          <div className="box">
            <div className="detail-box">
              <h2>{offerSection.heading}</h2>
              <h3>{offerSection.subheading}</h3>
              <Link to={offerSection.offerLink}>{offerSection.buyNowText}</Link>
            </div>
            <div className="img-box">
              <img src={offerSection.imagePath} alt="" />
            </div>
          </div>
          <div className="btn-box">
            <Link to={seeMoreLink.link}>
              <span>{seeMoreLink.text}</span>
              <img src={seeMoreLink.arrowImagePath} alt="" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
