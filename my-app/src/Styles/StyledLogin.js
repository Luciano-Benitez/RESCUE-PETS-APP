import styled from "styled-components";
import allColors from "../variables/Colors";

export const Container = styled.div`
position: absolute;
padding: 1%;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color:#f3f3f3;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
width: max-content;
height: max-content;

.header {
  text-align: center;
}

.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}

.centerButtons {
  display: flex;
  justify-content: space-around;
  margin-top: 1%;
}


label {
    display: block;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    
}

.input-parent input {
    padding: 10px 8px;
    width: 100%;
    font-size: 16px;
    background: darkgray;
    border: none;
    /* color: #c7c7c7; */
    border-radius: 4px;
    outline: none;
    transition: all 0.2s ease;
}

`

export const Button = styled.button`
padding: 10px 18px;
    font-size: 15px;
    background-color: ${allColors.colors[8]};
    border-radius: 5px;
    width: 100%;
    margin-top: 5%;
    height: 40px;
    font-size: 17px;
    padding: 10px;
    border: 0;
    font-weight: bold;
    color : white;
    cursor: pointer;
    a {
        color: white;
    }
    &:hover {
        background-color: ${allColors.colors[2]};
    }
`

export const StyledPreFooter = styled.div`
  text-align: center;
  height: 100%;
  background-image: url(../Icos/wave.svg);

  display: flex;
`