import "./my-profile-dashboard.scss"

import UserImg from "../img/ellipse-4.svg"
import QrCode from '../../images/customize/qrcode.svg'
import Polygon from '../img/triangle-black.svg'


const MyProfileDashboard = () => {
    return (
      <div>
        <div className="dashboard-container">
          <div className="dashboard-left-side">
            <p className="card-name">My Card</p>
            <div class="right-side-center">
              <div className="user-container">
                <div class="profile">
                  <img src={UserImg} />
                  <h5>John Doe</h5>
                  <p>Owner of Fluffy</p>
                </div>
              </div>

              <div class="info">
                <h5>John’s Message:</h5>
                <p>
                  {" "}
                  If you found my dog, please contact me from the information
                  below! Thank you!{" "}
                </p>
              </div>
              <div class="info">
                <h5>Phone Number</h5>
                <p>+91919191</p>
              </div>

              <div class="info">
                <h5>E-mail Address</h5>
                <p>johndoe@outlook.com</p>
              </div>


              <div class="info">
                <h5>Address</h5>
                <p>Purrington, PAW 12345</p>
              </div>




            </div>
          </div>

          <div className="dashboard-right-side">
            <div class="qr-container">
              <img src={QrCode}></img>
              <div class="message">
                <img src={Polygon}></img>
                <p>You found my dog!</p>
              </div>
              <button className="edit-qr white">Edit QR</button>
              <button className="edit-qr blue">Download QR</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyProfileDashboard