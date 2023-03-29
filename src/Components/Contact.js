import React from "react";
import Header from "../images/contact.jpg";
import Map from "./Map";

const location = {
  address: 'TDTC',
  lat: -6.784332243727264,
  lng: 39.20627969446912,
}

function Contact() {
  return (
    <div>
      <div className="head-text">
        <div
          style={{
            backgroundImage: `url(${Header})`,
            backgroundSize: "cover",
            height: "60vh",
            color: "#f5f5f5",
          }}
        ></div>
        <div className="text-on-image">
          <h1 style={{ textAlign: "center" }}> HAVE QUESTIONS?</h1>
          <p style={{ textAlign: "center" }}>Reach Out to Us</p>
        </div>
      </div>
      <div className="py-5 contacts bg-dark" id="contacts">
        <div className="text-center mb-5">
          <h1>Contact Me</h1>
          <p>
            Please fill out the form and describe your project needs and i will
            contact you as soon as possible
          </p>
          {/* <span className="success-message">{successMessage}</span> */}
        </div>
        {/* <div className="container"> */}
        <div class="form-floating mb-3 g-5">
            <div className="row mx-5">
              <div className="col-lg-6 col-xm-12">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  // label="email"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="text"
                  // label="phone"
                  className="form-control"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-lg-6 col-xs-12">
                <textarea
                  type="text"
                  // label="description"
                  className="form-control"
                  placeholder="Write your short Message"
                ></textarea>
                <button className="btn-main-offer contact-btn" type="submit">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Map location={location} zoomLevel={18}/>
    </div>
  );
}

export default Contact;
