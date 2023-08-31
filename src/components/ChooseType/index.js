import React from "react";
import "../ChooseType/style.css";
import personal from "../../images/icons/personal.svg";
import app from "../../images/icons/app.svg";
import business from "../../images/icons/business.svg";
import event from "../../images/icons/event.svg";
import form from "../../images/icons/form.svg";
import images from "../../images/icons/images.svg";
import multiple from "../../images/icons/multiple.svg";
import music from "../../images/icons/music.svg";
import pdf from "../../images/icons/pdf.svg";
import social from "../../images/icons/social.svg";

const ChooseType = () => {


  return (
    <>
      <html>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
        <div className="navbar">
          <div className="title">
            <img src="img/logo.svg" alt="logo" />
            <h2>CodeWizard</h2>
          </div>
          <div className="input">
            <ul>
              <li>
                <img src="/img/my-profile.svg" alt="" />
                <a href>My Profile</a>
              </li>
              <li>
                <img src="/img/settings.svg" alt="" />
                <a href>Settings</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-top">
          <div className="circle">
            <button>
              <i className="fa-solid fa-users" style={{ color: "#4831d4" }} />
              <i
                className="fa-solid fa-layer-group"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Choose Type</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-pen-to-square"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Edit Information</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-wand-magic-sparkles"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Customize</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-download"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Download QR</p>
          </div>
        </div>
        <div className="main-center">
          <div className="left-side-container">
            <h5>Choose Your QR Code Type</h5>
            <div className="left-side">
              <button className="chosen-button">
                <img src={personal} alt="" />
                Profile Card
                <p>Personal Page</p>
              </button>
              <button>
                <img src={multiple} alt="" />
                Multiple Links
                <p>Multiple Links</p>
              </button>
              <button>
                <img src={social} alt="" />
                Social Media
                <p>Profile Card</p>
              </button>
              <button>
                <img src={images} alt="" />
                Images
                <p>Images</p>
              </button>
              <button>
                <img src={pdf} alt="" />
                PDF
                <p>PDF</p>
              </button>
              <button>
                <img src={app} alt="" />
                App
                <p>App</p>
              </button>
              <button>
                <img src={music} alt="" />
                MP3
                <p>MP3</p>
              </button>
              <button>
                <img src={form} alt="" />
                Form
                <p>Form</p>
              </button>
              <button>
                <img src={business} alt="" />
                Business Card
                <p>Business Card</p>
              </button>
              <button>
                <img src={event} alt="" />
                Event
                <p>Event</p>
              </button>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-top">
              <h5>Preview</h5>
            </div>
            <div className="right-side-center">
              <div className="profile">
                <img src="/img/Ellipse 4.svg" alt="" />
              </div>
              <div className="name">
                <h5>John Doe</h5>
                <p>Owner of Fluffy</p>
              </div>
              <div className="info">
                <h6>John’s Message:</h6>
                <p>
                  {" "}
                  If you found my dog, please contact me from the information
                  below! Thank you!{" "}
                </p>
              </div>
              <div className="info">
                <h5>Phone Number</h5>
                <p>+91919191</p>
              </div>
              <div className="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>
              <div className="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>
              <div className="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>
              <div className="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>
              <div className="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>
              <div className="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>
              <div className="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>
              <div className="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>
              <div className="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>
              <div className="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>
            </div>
            <div className="right-side-bottom">
              <button >
                Previous
              </button>
              <button
                
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </html>
    </>
  );
};

export default ChooseType;
