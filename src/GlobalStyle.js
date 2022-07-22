import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none; 
    color: var(--black);
    
    font-family: 'Pretendard';

}
:root{
  --gray1:#EFEFEF;
  --gray2:#D1D1D1;
  --gray3:#9A9A9A;
  --gray4:#777777;
  --black:#111111;

  --blue1:#ECF1F8;
  --blue2:#A6C9FF;
  --blue3:#74A0E3;
  --blue4:#3284FF;

  --point1:#5BFAD3; // 민트
  --point2:#4F32FF; // 파랑
  --point3:#FD6E6E; // 빨강
}
*::-webkit-scrollbar {
    display: none;
  }
  button{
    border: 0;
  }
  a{
    color: inherit;
  }
.rc-time-picker-panel ,.rc-time-picker-panel-column-3 ,.rc-time-picker-panel-placement-bottomLeft ,.rc-time-picker-panel{
  left: 50%!important;
  right: auto!important;
  top: 410px!important;
  transform: translateX(-50%)!important;
  position: fixed;
  width: 330px!important;
  height: 147px!important;
}
.rc-time-picker-panel-select-option-selected,
.rc-time-picker-panel-select ul li:hover{
  background-color: #fff;
}
.rc-time-picker-panel-combobox::after{
  content:":";
  position: absolute;
  right: 33%;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 10px;
  line-height: 10px;
  font-weight: bold;
}
.rc-time-picker-panel-select{
  border: 0;
  position: relative;
}
.rc-time-picker-panel-combobox{
  width: 335px!important;
  height: 147px!important;

}
  .rc-time-picker{
    display: block;
  }
  .rc-time-picker-panel-combobox {
    display: flex;
    width: auto;
    padding: 16px;
  }
  .rc-time-picker-panel-input-wrap {
    display: none;
  }
  .rc-time-picker-panel-select {
    flex: 1;
  font-size: 20px!important;

  }
  .rc-time-picker-panel-select li{
    text-align: center;
height: 40px;
line-height: 40px;

  }
  .rc-time-picker-panel-select:first-child {
    order: 2;
  }
  .rc-time-picker-panel-select:nth-child(2) {
    order: 3;
  }
  .rc-time-picker-panel-select:last-child {
    order: 1;
  }
  .rc-time-picker-panel-select {
    float: none;
  }
  .datepicker {
    width: 100%;
}
`;
export default GlobalStyle;
