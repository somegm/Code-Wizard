
import "./profile.scss"
import UploadImg from '../img/account-img.svg'

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
                    <img src={UploadImg}/>
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
              <h5>Address</h5>
              <p>Purrington, PAW 12345</p>
            </div>

            <div class="info">
              <h5>E-mail Address</h5>
              <p>johndoe@outlook.com</p>
            </div>

            {/*  */}


            <div class="info">
              <h5>Pet Title</h5>
              <p>Fluffy the Dog</p>
            </div>

            <div class="info">
              <h5>Pet Name</h5>
              <p>John Doe’s Dog</p>
            </div>

            <div class="info">
              <h5>Legal Vaccines Completed ?</h5>
              <p>Legal Vaccines Completed: Yes</p>
            </div>

            
            <div class="info">
              <h5>Breed</h5>
              <p>Golden</p>
            </div>

            
            <div class="info">
              <h5>Illnesses</h5>
              <p>Allergic to dairy</p>
            </div>

            
            <div class="info">
              <h5>Adoption Date</h5>
              <p>01/09/2021</p>
            </div>

            
            <div class="info">
              <h5>Pet Message</h5>
              <p>If you found me, please take me to my owner, I miss him so much!</p>
            </div>
            

            </div>



            </div>

            </div>

        </div>
    )
}

export default MyProfile