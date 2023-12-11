// Component_6.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_6.json';

export default class Component_6 extends Component {
  initMap = () => {
    // Add your map initialization code here
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Set your initial map center coordinates
      zoom: 16, // Set the initial zoom level
    };
  
    const map = new window.google.maps.Map(document.getElementById('googleMap'), mapOptions);
  
    // You can customize the map further based on your needs
  };
  
  componentDidMount() {
    this.initMap();
  }

  render() {
    const { contactSection, formFields, sendButton } = texts;

    return (
      <div className="main_body_content">
        <section className="contact_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
                <div className="form_container">
                  <div className="heading_container">
                    <h2>{contactSection.heading}</h2>
                  </div>
                  <form action="">
                    {formFields.map((field, index) => (
                      <div key={index}>
                        <input type={field.type} placeholder={field.placeholder} className={field.className} />
                      </div>
                    ))}
                    <div className="d-flex">
                      <button>{sendButton}</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="map_container">
                  <div className="map">
                    <div id="googleMap" style={{ height: '400px' }}></div>
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
