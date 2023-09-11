
import "./profile.scss"
import UserImg from "../img/ellipse-4.svg"

const MyProfile = () => {
    return(
    <div>
            
        <div class="main-center">

        <div class="right-side">
            <div class="right-side-top">
                <h5>Connecting Lost Pets to Their Loving Homes</h5>
                <p>This pet may be lost, to contact the owner and see the information about this pet, please refer to the information below.</p> 
            </div>


            <div class="right-side-center">

            <div className="user-container">
                <div class="profile">
                    <img src={UserImg}/>
                    <h5>John Doe</h5>
                    <p>Owner of Fluffy</p>
                </div>
            </div>

                <div class="info">
                <h5>John’s Message:</h5> 
                <p> If you found my dog, please contact me from the information below! Thank you! </p>
            </div>
                <div class="info">
                    <h5>Phone Number</h5>
                    <p>+91919191</p>
                </div>
                

                <div class="info">
                    <h5>Address</h5>
                    <p>Purrington, PAW 12345</p>
                </div>


                <div class="info">
                    <h5>E-mail Address</h5>
                    <p>johndoe@outlook.com</p>
                </div>


                <div class="info">
                    <h5>Address</h5>
                    <p>Purrington, PAW 12345</p>
                </div>


                <div class="info">
                    <h5>E-mail Address</h5>
                    <p>johndoe@outlook.com</p>
                </div>

                <div class="info">
                    <h5>Address</h5>
                    <p>Purrington, PAW 12345</p>
                </div>


                <div class="info">
                    <h5>E-mail Address</h5>
                    <p>johndoe@outlook.com</p>
                </div>

                <div class="info">
                    <h5>Address</h5>
                    <p>Purrington, PAW 12345</p>
                </div>


                <div class="info">
                    <h5>E-mail Address</h5>
                    <p>johndoe@outlook.com</p>
                </div>

                <div class="info">
                    <h5>Address</h5>
                    <p>Purrington, PAW 12345</p>
                </div>


                <div class="info">
                    <h5>E-mail Address</h5>
                    <p>johndoe@outlook.com</p>
                </div>
            

            </div>



            </div>

            </div>

        </div>
    )
}

export default MyProfile