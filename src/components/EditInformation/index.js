import React, { useState } from "react";
import "../EditInformation/edit_information.css";

const EditInformation = () => {
  // User kısmı bilgileri
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  //Pet kısmının bilgileri
  const [petTitle, setPetTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [petLegal, setPetLegal] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petIllnesses, setPetIllnesses] = useState("");
  const [petAdoption, setPetAdoption] = useState("");
  const [petMessage, setPetMessage] = useState("");

  //Hide Show kısmının ayarlamaları
  const [isPhoneHidden, setIsPhoneHidden] = useState(false); 
  const [isEmailHidden, setIsEmailHidden] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
      //user kısmı
    } else if (name === "name") {
      setName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "message") {
      setMessage(value);
    }
    //pet kısımı
    else if (name === "petTitle") {
      setPetTitle(value);
    }
    else if (name === "petName") {
      setPetName(value);
    }
    else if (name === "petLegal") {
      setPetLegal(value);
    }
    else if (name === "petBreed") {
      setPetBreed(value);
    }
    else if (name === "petIllnesses") {
      setPetIllnesses(value);
    }
    else if (name === "petAdoption") {
      setPetAdoption(value);
    }
    else if (name === "petMessage") {
      setPetMessage(value);
    }

  };
  //Toggle ların görünürlüğünü ayarlama
  const togglePhoneVisibility = () => {
    setIsPhoneHidden(!isPhoneHidden);
  };

  const toggleEmailVisibility = () => {
    setIsEmailHidden(!isEmailHidden);
  };
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

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
          <button>
            <img src="/img/edit-information-2.svg" alt />
          </button>
          <p>Edit Information</p>
        </div>
        <div className="circle">
          <button>
            <img src="/img/customize-2.svg" alt />
          </button>
          <p>Customize</p>
        </div>
        <div className="circle">
          <button>
            <img src="/img/save-2.svg" alt />
          </button>
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
              <button>
                <img src="/img/upload-image.svg" alt />
              </button>
              <a href>Upload İmage</a>
            </div>
            <div className="account">
              <p>Title</p>
              <span>*</span>
              <input
                type="text"
                name="title"
                placeholder="Input"
                value={title}
                onChange={handleInputChange}
              />
            </div>
            <div className="account">
              <p>Name</p>
              <span>*</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="account">
              <p>Last Name</p>
              <span>*</span>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last name"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="account">
              <p>Phone Number</p>
              <span>*</span>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handleInputChange}
              />
              <div className="toggle">
              <p>Hide</p>
                <input
                  type="checkbox"
                  id="switch-3"
                  checked={isPhoneHidden}
                  onChange={togglePhoneVisibility}
                />
                <label htmlFor="switch-3">Toggle</label>
                <p>Show</p>
              </div>
            </div>
            <div className="account">
              <p>E-mail Address</p>
              <span>*</span>
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={handleInputChange}
                
              />
              <div className="toggle">
              <p>Hide</p>
                <input
                  type="checkbox"
                  id="switch-4"
                  checked={isEmailHidden}
                  onChange={toggleEmailVisibility}
                />
                <label htmlFor="switch-4">Toggle</label>
                <p>Show</p>
              </div>
            </div>
            <div className="account">
              <p>Address</p>
              <span>*</span>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={handleInputChange}
              />
              <div className="toggle">
              <p>Hide</p>
                <input
                  type="checkbox"
                  id="switch-5"
                  checked={isHidden}
                  onChange={toggleVisibility}
                />
                <label htmlFor="switch-5">Toggle</label>
                <p>Show</p>
              </div>
            </div>
            <div className="account">
              <p>Message</p>
              <textarea
                type="text"
                name="message"
                cols={5}
                rows={10}
                placeholder="Textarea"
                defaultValue={""}
                value={message}
                onChange={handleInputChange}
              />
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
                <button>
                  <img src="/img/upload-image.svg" alt />
                </button>
                <a href>Upload İmage</a>
              </div>
              <div className="account">
                <p>Pet Title</p>
                <input
                type="text"
                name="petTitle"
                placeholder="Ex: Fluffy The Dog"
                value={petTitle}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Name</p>
                <input
                type="text"
                name="petName"
                placeholder="Pet Name"
                value={petName}
                onChange={handleInputChange}
              />
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
                <input
                type="text"
                name="petBreed"
                placeholder="Breed"
                value={petBreed}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Illnesses</p>
                <textarea
                  name="petIllnesses"
                  cols={5}
                  rows={10}
                  placeholder="Textarea"
                  defaultValue={""}
                  value={petIllnesses}
                  onChange={handleInputChange}
                />
              </div>
              <div className="account">
                <p>Adoption Date</p>
                <input
                type="text"
                name="petAdoption"
                placeholder="Pet Adoption"
                value={petAdoption}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Message</p>
                <textarea
                  name="petMessage"
                  cols={5}
                  rows={10}
                  placeholder="Textarea"
                  defaultValue={""}
                  value={petMessage}
                  onChange={handleInputChange}
                />
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
              <h5>
                {name} {lastName}
              </h5>
              <p>{title}</p>
            </div>
            <div className="info">
              <h6></h6>
              <p> </p>
            </div>
            <div className="info">
              <h5>Phone Number:</h5>
              <p>{isPhoneHidden ? '*****' : phoneNumber}</p>
            </div>
            <div className="info">
              <h5>Address</h5>
              <p>{isHidden ? '*****' : address}</p>
            </div>
            <div className="info">
              <h5>E-mail Adress</h5>
              <p>{isEmailHidden ? '*****' : email}</p>
            </div>
            <div className="info">
              <h5>Message</h5>
              <p>{message}</p>
            </div>
            <div className="info">
              <h5>Pet Title</h5>
              <p>{petTitle}</p>
            </div>
            <div className="info">
              <h5>Pet Name</h5>
              <p>{petName}</p>
            </div>
            <div className="info">
              <h5>Legal Vaccines Completed ? </h5>
              <p>{petLegal}</p>
            </div>
            <div className="info">
              <h5>Breed</h5>
              <p>{petBreed}</p>
            </div>
            <div className="info">
              <h5>Illnesses</h5>
              <p>{petIllnesses}</p>
            </div>
            <div className="info">
              <h5>Adoption Date</h5>
              <p>{petAdoption}</p>
            </div>
            <div className="info">
              <h5>Pet Message</h5>
              <p>{petMessage}</p>
            </div>

          </div>
          <div className="right-side-bottom">
            <button>Previous</button>
            <button className="button-active">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInformation;
