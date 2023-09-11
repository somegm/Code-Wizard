import React, { useState } from "react";
import "../EditInformation/edit_information.scss";
import Done from '../img/done-white.svg'
import EditWhite from '../img/edit-white.svg'
import Customize from '../img/customize-blue-2.svg'
import Save from '../img/save-blue-2.svg'
import Upload from '../img/UploadImg.svg'
import UploadImg from '../img/account-img.svg'
import PetImg from '../img/pet-img.svg'
import Next from '../img/arrow-next.svg'
import RandomUser from '../img/RandomUser.svg'

const EditInformation = () => {
  // User kısmı bilgileri
  const [user_title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [user_message, setMessage] = useState("");

  //Pet kısmının bilgileri
  const [pet_title, setPetTitle] = useState("");
  const [pet_name, setPetName] = useState("");
  const [legal_vaccines, setPetLegal] = useState("");
  const [pet_breed, setPetBreed] = useState("");
  const [illness, setPetIllnesses] = useState("");
  const [adoption_date, setPetAdoption] = useState("");
  const [pet_message, setPetMessage] = useState("");


  //Hide Show kısmının ayarlamaları
  const [isPhoneHidden, setIsPhoneHidden] = useState(false); 
  const [isEmailHidden, setIsEmailHidden] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_title") {
      setTitle(value);
      //user kısmı
    } else if (name === "name") {
      setName(value);
    } else if (name === "last_name") {
      setLastName(value);
    } else if (name === "phone_number") {
      setPhoneNumber(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "user_message") {
      setMessage(value);
    }
    //pet kısımı
    else if (name === "pet_title") {
      setPetTitle(value);
    }
    else if (name === "pet_name") {
      setPetName(value);
    }
    else if (name === "pet_legal") {
      setPetLegal(value);
    }
    else if (name === "pet_breed") {
      setPetBreed(value);
    }
    else if (name === "illness") {
      setPetIllnesses(value);
    }
    else if (name === "adoption_date") {
      setPetAdoption(value);
    }
    else if (name === "pet_message") {
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

  //token degiskeni
  let userToken = localStorage.getItem('user_token');
  let userId = localStorage.getItem('userId')


  //Backend e veri yollama

  const handleSubmit = async () => {
    //user data
    const userData = {
    name,
    last_name,
    user_title,
    phone_number,
    address,
    user_message,
    };
  
    // pet data
    const petData = {
      pet_breed,
      pet_title,
      illness,
      pet_name,
      pet_message,
      adoption_date,
      legal_vaccines,    
    };
  
    try {
      //user data API 
      const userResponse = await fetch("https://s-tekin.jotform.dev/intern-api/user/"+userId+"/user_token/"+userToken+"/update", {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (userResponse.ok) {
        console.log("User data successfully updated.",userResponse);
      } else {
        console.error("User data update failed.");
      }
  
      //pet data API 
      const petResponse = await fetch("https://s-tekin.jotform.dev/intern-api/pet/user_token/"+userToken+"/create", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });
  
      if (petResponse.ok) {
        console.log("Pet data successfully updated.",petResponse);
      } else {
        console.error("Pet data update failed.");
      }
  
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  //pet ekleme kısmı
 
  return (
    <div className="main-container">
 
      <div className="main-top">
      <div className="circle-container">
        <div className="circle">
          <button className="active">
            <img src={Done} alt />
          </button>
          <p>Choose Type</p>
        </div>

        <div class="next">
            <img src={Next} ></img>
        </div>

        <div className="circle">
          <button className="current">
            <img src={EditWhite} alt />
          </button>
          <p>Edit Information</p>
        </div>

        <div class="next">
            <img src={Next} ></img>
        </div>
  
        <div className="circle">
          <button>
            <img src={Customize} alt />
          </button>
          <p>Customize</p>
        </div>

        <div class="next">
            <img src={Next} ></img>
        </div>

        <div className="circle">
          <button>
            <img src={Save} alt />
          </button>
          <p>Save</p>
        </div>
        </div>

      </div>
      <div className="main-center">
      <div className="left-side-container">
        <p className="top-title">Edit Information</p>
        <div className="left-side">
          <div className="personal-information">
            <p>Personal Information</p>
          </div>
          <div className="user-form-input">
            <div className="account">
              <button>
                <img src={UploadImg} alt />
              </button>
              <div className="upload-img">

              <img src={Upload}></img>
              <input className="file-input" type="file">
              </input>
              </div>
            </div>
            <div className="account">
              <p>Title</p>
              <span>*</span>
              <input
                type="text"
                name="user_title"
                placeholder="Input"
                value={user_title}
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
                name="last_name"
                placeholder="Your Last name"
                value={last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="account">
              <p>Phone Number</p>
              <span>*</span>
              <input
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
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
                name="user_message"
                cols={5}
                rows={10}
                placeholder="Textarea"
                defaultValue={""}
                value={user_message}
                onChange={handleInputChange}
              />
            </div>
          </div>

          
          {/*  Pet İnformation Section    */}
          <div className="pet-information">
            <p>Additional Information</p>
            <select name="pets" id="pets" >
            <option value="value" selected>-Choose Pet-</option>
              
            </select>
          </div>
          <div className="center-container">
            <div className="radio">
              <input type="radio" />
            </div>
            <div className="pet-form-input">
              <div className="account">
              
                <button>
                  <img src={PetImg}></img>
                </button>
                <div className="upload-img">

                  <img src={Upload}></img>
                  <input className="file-input" type="file">
                  </input>
                </div>
              
                
              </div>
              <div className="account">
                <p>Pet Title</p>
                <input
                type="text"
                name="pet_title"
                placeholder="Ex: Fluffy The Dog"
                value={pet_title}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Name</p>
                <input
                type="text"
                name="pet_name"
                placeholder="Pet Name"
                value={pet_name}
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
                name="pet_breed"
                placeholder="Breed"
                value={pet_breed}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Illnesses</p>
                <textarea
                  name="illness"
                  cols={5}
                  rows={10}
                  placeholder="Textarea"
                  defaultValue={""}
                  value={illness}
                  onChange={handleInputChange}
                />
              </div>
              <div className="account">
                <p>Adoption Date</p>
                <input
                type="text"
                name="adoption_date"
                placeholder="Pet Adoption"
                value={adoption_date}
                onChange={handleInputChange}
              />
              </div>
              <div className="account">
                <p>Message</p>
                <textarea
                  name="pet_message"
                  cols={5}
                  rows={10}
                  placeholder="Textarea"
                  defaultValue={""}
                  value={pet_message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="update-button">
                <button className="button-click">Add New Pet</button>
                <button className="button-click" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        </div>
        <div className="right-side">
          <div className="right-side-top">
            <h5 className="right-top-title">Preview</h5>
          </div>
          <div className="right-side-center">
            <div className="profile">
              <img src={RandomUser} alt />
            </div>
            <div className="name">
              <h5>
                {name} {last_name}
              </h5>
              <p>{user_title}</p>
            </div>
            <div className="info">
              <h6></h6>
              <p> </p>
            </div>
            <div className="info">
              <h5>Phone Number:</h5>
              <p>{isPhoneHidden ? '*****' : phone_number}</p>
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
              <p>{user_message}</p>
            </div>
            <div className="info">
              <h5>Pet Title</h5>
              <p>{pet_title}</p>
            </div>
            <div className="info">
              <h5>Pet Name</h5>
              <p>{pet_name}</p>
            </div>
            <div className="info">
              <h5>Legal Vaccines Completed ? </h5>
              <p>{legal_vaccines}</p>
            </div>
            <div className="info">
              <h5>Breed</h5>
              <p>{pet_breed}</p>
            </div>
            <div className="info">
              <h5>Illnesses</h5>
              <p>{illness}</p>
            </div>
            <div className="info">
              <h5>Adoption Date</h5>
              <p>{adoption_date}</p>
            </div>
            <div className="info">
              <h5>Pet Message</h5>
              <p>{pet_message}</p>
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
