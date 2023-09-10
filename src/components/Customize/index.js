
import "./customize.scss"
import DoneWhite from '../../images/customize/done-white.svg'
import ArrowNext from '../../images/customize/arrow-next-2.svg'
import CustomizeWhite from '../../images/customize/customize-white.svg'
import SaveBlue from '../../images/customize/save-blue.svg'
import QrCode from '../../images/customize/qrcode.svg'
import Polygon from '../../images/customize/Polygon-1.svg'

const Customize = () => {
return(
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

    <div class="main-center">
    <div class="custom-contain">
        <p>Customize Your QR</p>

    <div class="customize-qr">
        <div class="background">
            <p>Background Color</p>
            <input class="colorpicker" type="color" id="colorpicker" ></input>
        </div>

        <div class="background">
            <p>Dots Color</p>
            <input class="colorpicker" type="color" id="colorpicker" ></input>
        </div>

        <div class="background"> 
            <p>QR Text</p>
            <input type="text" placeholder="Input"></input>
        </div>

        <div class="update">
            <button>Update</button>
        </div>
        
    </div>
    </div>

    <div class="show-qr">
        <p class="title">Preview</p>
        <img src={QrCode}></img>
        <div class="message">
            <img src={Polygon}></img>
        <p>You found my dog!</p>
        </div>
        <div class="steps">
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>
    </div>
        </div>
)
}

export default Customize