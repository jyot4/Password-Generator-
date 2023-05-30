import React, { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Numbers,
  UpperCaseLetter,
  LowerCaseLetter,
  specialCharacter,
} from "./Character";

import {password_success,password_fail} from "./Message"

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const handleGeneratePassword = () => {
    if (!upperCase && !lowerCase && !number && !symbol) {
      toast.error(
        "To Generate Password You Have To Select Atleast One Checkbox",true)
    } 
      else {
      let character = "";
      if (number) {
        character = character + Numbers;
      }
      if (upperCase) {
        character = character + UpperCaseLetter;
      }
      if (lowerCase) {
        character = character + LowerCaseLetter;
      }
      if (symbol) {
        character = character + specialCharacter;
      }
      setPassword(createPassword(character))
      toast.success("Password  is Generated successfully",false)
    }
  };

const createPassword =(character)=>{
let password = "";
const characterLength = character.length
for( let i = 0; i <= passwordLength; i++){
const CharacterIndex = Math.floor(Math.random()* characterLength)
password +=  character.charAt(CharacterIndex)
}
 return password
}
 
// charAt is used to make first letter string

// Navigator = The JavaScript navigator object is used for browser detection, it can be used to get browser information such as appName, appCodeName, userAgent, etc.
//  Navigator object is a window property so it can be accessed by the "window.navigator" or "navigator".

// It can also check whether the browser is in online mode or not and whether Java is enabled or not in our system.


const CopyToClipboard = (password) => {
  navigator.clipboard.writeText(password)
}

console.log(CopyToClipboard)

const handleCopyPassword = (e) => {
if(password ===""){
  toast.warning(password_fail,true)
}
else{
CopyToClipboard(password)
  toast.success(password_success)
}
}





  return (
    <div className="App">
      <div className="box">
        <div className="container">
          <h2 className="head">Password Generator</h2>
          <div className="generator">
            <h3>{password}</h3>
            <button className="btn">
              <i
               onClick={handleCopyPassword}><ContentPasteIcon />
              </i>
            </button>
          </div>
          <div className="form">
            <label>Password Length</label>
            <input
            defaultValue={passwordLength}  onChange= {(e)=> setPasswordLength(e.target.value)}
              className="pa"
              type="number"
              name="password-length"
              max="26"
              min="8"

            ></input>
          </div>
          <div className="form">
            <label>Add Uppercase Letter</label>
            <input checked={upperCase}  onChange= {(e)=> setUpperCase(e.target.checked)} type="checkbox" name="Uppercase"></input>
          </div>
          <div className="form">
            <label>Add LowerCase Letter</label>
            <input checked={lowerCase}  onChange= {(e)=> setLowerCase(e.target.checked)} type="checkbox" name="LowerCase"></input>
          </div>
          <div className="form">
            <label>Include Number</label>
            <input checked={number}  onChange= {(e)=> setNumber(e.target.checked)} type="checkbox" name="Number"></input>
          </div>
          <div className="form">
            <label>Include Symbol</label>
            <input  checked={symbol}  onChange= {(e)=> setSymbol(e.target.checked)}type="checkbox" name="Symbol"></input>
          </div>
          <button onClick={handleGeneratePassword} className="submit">
            Generate Password
          </button>
          <ToastContainer 
          position= "top-center"
          
          />
        </div>
      </div>
    </div>
  );
}

export default App;
