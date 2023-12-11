import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_3.json'; // Assuming the JSON file is in the same directory as your component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Component_3 extends Component {
  render() {
    const { chocolateSection, chocolates } = texts;

    const containerStyle = {
      display: 'flex', // Use flexbox for the display
    };

    const boxStyle = {
      width: '50%', // Adjust the width of the boxes
    };

    // Slick settings
    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Adjust the number of slides to show at a time
      slidesToScroll: 1,
    };

    return (
      <section className="chocolate_section">
        <div className="container">
          <div className="heading_container">
            <h2>{chocolateSection.heading}</h2>
            <p>{chocolateSection.subheading}</p>
          </div>
        </div>

        <div className="main_body_content">
          <Slider {...slickSettings}>
            {chocolates.map((chocolate, index) => (
              <div key={index} className="chocolate_container" style={boxStyle}>
                <div className="box">
                  <div className="img-box">
                    <img src={chocolate.imageSrc} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>{chocolate.title}</h6>
                    <h5>{chocolate.price}</h5>
                    <Link to="/your-link-path">{chocolate.buyNowText}</Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Next Button */}
        <button
          type="button"
          data-role="none"
          className="slick-next slick-arrow"
          aria-label="Next"
          role="button"
          style={{}}
        >
          Next
        </button>
      </section>
    );
  }
}
