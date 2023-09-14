import "./save.scss";

import ArrowNext from "../../images/customize/arrow-next-2.svg";
import DoneWhite from "../img/done-white.svg";
import SaveWhite from "../img/save-white-2.svg";
import QrCode from "../../images/customize/qrcode.svg";
import Polygon from "../img/triangle-black.svg";
import { useNavigate } from "react-router-dom";

const Save = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="main-top-save">
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
            <button class="active done">
              <img src={DoneWhite}></img>
            </button>
            <p>Customize</p>
          </div>

          <div class="next">
            <img src={ArrowNext}></img>
          </div>

          <div class="circle">
            <button class="active">
              <img src={SaveWhite}></img>
            </button>
            <p>Save</p>
          </div>
        </div>
      </div>

      <div class="main-center-save">
        <div class="show-qr">
          <p class="title">Yay! Your QR Code Is Ready!</p>
          <div class="qr-container">
            <img src={QrCode}></img>
            <div class="message">
              <img src={Polygon}></img>
              <p>You found my dog!</p>
            </div>
          </div>
          <div class="steps">
            <button
              className="save-previous"
              onClick={() => navigate("/customize")}
            >
              Previous
            </button>
            <button onClick={() => navigate("/myprofile")}>Save</button>
          </div>
          <div class="download">
            <button onClick={() => navigate("/profile")}>Display QR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
