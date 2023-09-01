import React from 'react'
import "../EditInformation/edit_information.css"

const EditInformation = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="edit_information.css" />
  <div className="navbar">
    <div className="title">
      <img src="img/codewizard logo.svg" alt="logo" />
      <h2>CodeWizard</h2>
    </div>
    <div className="input">
      <ul>
        <li>
          <img src="/img/ic_outline-account-circle (1).svg" alt />
          <a href>Dashboard</a>
        </li>
        <li>
          <img src="/img/ic_outline-settings.svg" alt />
          <a href>Settings</a>
        </li>
      </ul>
    </div>
  </div> 
  <div className="main-top">
    <div className="circle">
      <button className="active">
        <img src="/img/choose-type-2.svg" alt />
      </button>
      <p>Choose Type</p>
    </div>
    <div className="circle">
      <button><img src="/img/edit-information-2.svg" alt /></button>
      <p>Edit Information</p>
    </div>
    <div className="circle">
      <button><img src="/img/customize-2.svg" alt /></button>
      <p>Customize</p>
    </div>
    <div className="circle">
      <button><img src="/img/save-2.svg" alt /></button>
      <p>Save</p>
    </div>
  </div>
  <div className="main-center">
    <div className="left-side"> 
      <div className="personal-information">
        <p>Personal Information</p>
      </div>
      <div className="user-form-input">
        <div className="account">
          <button><img src="/img/upload-image.svg" alt /></button>
          <a href>Upload İmage</a>
        </div>
        <div className="account">
          <p>Title</p>
          <span>*</span>
          <input type="text" placeholder="Input" />
        </div>
        <div className="account">
          <p>Name</p>
          <span>*</span>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="account">
          <p>Last Name</p>
          <span>*</span>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="account">
          <p>Phone Number</p>
          <span>*</span>
          <input type="text" placeholder="Your name" />
          <div className="toggle">
            <p>Hide</p>
            <input type="checkbox" id="switch-3" /><label htmlFor="switch-3">Toggle</label>
            <p>Show</p>
          </div>
        </div>
        <div className="account">
          <p>E-mail Address</p>
          <span>*</span>
          <input type="text" placeholder="Your name" />
          <div className="toggle">
            <p>Hide</p>
            <input type="checkbox" id="switch-1" /><label htmlFor="switch-1">Toggle</label>
            <p>Show</p>
          </div>
        </div>
        <div className="account">
          <p>Address</p>
          <span>*</span>
          <input type="text" placeholder="Your name" />
          <div className="toggle">
            <p>Hide</p>
            <input type="checkbox" id="switch-2" /><label htmlFor="switch-2">Toggle</label>
            <p>Show</p>
          </div>
        </div>
        <div className="account">
          <p>Message</p>
          <textarea name id cols={5} rows={10} placeholder="Textarea" defaultValue={""} />
        </div>
      </div>
      {/*  Pet İnformation Section    */}
      <div className="pet-information">
        <p>Additional Information</p>
        <select name="pets" id="pets">
          <option value="pet">Pet</option>
          <option value="fluffy">Fluffy</option>
          <option value="kitty">Kitty</option>
          <option value="bird">Bird</option>
        </select>
      </div>
      <div className="center-container">
        <div className="radio">
          <input type="radio" />
        </div>
        <div className="pet-form-input">
          <div className="account">
            <button><img src="/img/upload-image.svg" alt /></button>
            <a href>Upload İmage</a>
          </div>
          <div className="account">
            <p>Pet Title</p>
            <input type="text" placeholder="Input" />
          </div>
          <div className="account">
            <p>Name</p>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="account">
            <p>Legal Vaccines Completed?</p>
            <select name="pets" id="pets">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="account">
            <p>Breed</p>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="account">
            <p>Illnesses</p>
            <textarea name id cols={5} rows={10} placeholder="Textarea" defaultValue={""} />
          </div>
          <div className="account">
            <p>Adoption Date</p>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="account">
            <p>Message</p>
            <textarea name id cols={5} rows={10} placeholder="Textarea" defaultValue={""} />
          </div>
          <div className="update-button">
            <button>Add New Pet</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
    <div className="right-side">
      <div className="right-side-top">
        <h5>Preview</h5>
      </div>
      <div className="right-side-center">
        <div className="profile">
          <img src="/img/Ellipse 4.svg" alt />
        </div>
        <div className="name">
          <h5>John Doe</h5>
          <p>Owner of Fluffy</p>
        </div>
        <div className="info">
          <h6>John’s Message:</h6> 
          <p> If you found my dog, please contact me from the information below! Thank you! </p>
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
          <h6>Address</h6>
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
        <button>Previous</button>
        <button className="button-active">Next</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default EditInformation
