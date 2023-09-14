import { useState } from "react";

import "./customize.scss";


import DoneWhite from "../../images/customize/done-white.svg";
import ArrowNext from "../../images/customize/arrow-next-2.svg";
import CustomizeWhite from "../../images/customize/customize-white-key.svg";
import SaveBlue from "../../images/customize/save-blue.svg";
import QrCode from "../../images/customize/qrcode.svg";
import Polygon from "../img/triangle-black.svg";
import { useNavigate } from "react-router-dom";

const Customize = () => {
  const navigate = useNavigate();

  const [bg_color, setBgColor] = useState("");
const [qr_text, setQrText] = useState("");

const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "bgColor") {
        setBgColor(value);
    } else if (name === "qrText") {
        setQrText(value);
    }
}

let userToken = localStorage.getItem('user_token');

const handleQrFeaturesSubmit = async () => {

  //user data
  const qrFeatures = { bg_color, qr_text };

  try{
  const QrFeaturesResponse = await fetch("https://s-tekin.jotform.dev/intern-api/qr/6ebf9aa36cca950c936024afd/update_features?user_token=" + userToken , {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(qrFeatures),
    });

    if (QrFeaturesResponse.ok) {
      console.log("QR Features successfully updated.",QrFeaturesResponse);
    } else {
      console.error("QR Features update failed.");
    }

  } catch (error) {
      console.error("An error occurred:", error);
  }
};

  return (
    <div>
      <div class="main-top">
        <div class="circle-container">
          <div class="circle">
            <button class="active done">
              <img src={DoneWhite}></img>
            </button>
            <p>Choose Type</p>
          </div>

          <div class="next">
            <img src={ArrowNext}></img>
          </div>

          <div class="circle">
            <button class="active done">
              <img src={DoneWhite}></img>
            </button>
            <p>Edit Information</p>
          </div>

          <div class="next">
            <img src={ArrowNext}></img>
          </div>

          <div class="circle">
            <button class="active">
              <img src={CustomizeWhite}></img>
            </button>
            <p>Customize</p>
          </div>

          <div class="next">
            <img src={ArrowNext}></img>
          </div>

          <div class="circle">
            <button>
              <img src={SaveBlue}></img>
            </button>
            <p>Save</p>
          </div>
        </div>
      </div>

      <div class="main-center-customize">
        <div class="custom-contain">
          <p>Customize Your QR</p>

          <div class="customize-qr">
            <div class="background">
              <p>Background Color</p>
              <input class="colorpicker" type="color" id="bgColor" name="bgColor" onChange={handleInputChange}></input>
            </div>

            <div class="background">
              <p>Dots Color</p>
              <input class="colorpicker" type="color" id="colorpicker"></input>
            </div>

            <div class="background">
              <p>QR Text</p>
              <input type="text" placeholder="Input" id="qrText" name="qrText" onChange={handleInputChange}></input>
            </div>

            <div class="update">
              <button onClick={handleQrFeaturesSubmit}>Update</button>
            </div>
          </div>
        </div>

        <div class="show-qr-customize">
          <p class="title">Preview</p>
          <div className="custom-qr-container" style={{backgroundColor: bg_color}}>
            <img src={QrCode}></img>
            <div class="message">
              <img src={Polygon}></img>
              <p>{qr_text}</p>
            </div>
          </div>
          <div class="steps">
            <button
              onClick={() => navigate("/edit")}
              className="customize-previous"
            >
              Previous
            </button>
            <button onClick={() => navigate("/save")}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
