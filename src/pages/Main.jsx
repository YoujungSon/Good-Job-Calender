import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

// 컴포넌트
import Nav from "../componenets/Nav";
import WeekSchedule from "../componenets/WeekSchedule";
import MonthSchedule from "./../componenets/month/MonthSchedule";
import MonthList from "../componenets/MonthList";
import DailyList from "../componenets/DailyList";

// 이미지
import zoomin from "../assets/img/icon/zoomin.png";
import zoomout from "../assets/img/icon/zoomout.png";
import { useSelector } from "react-redux";

function Main() {
  const navigate = useNavigate();
  const [weekMonth, setWeekMonth] = useState(true);
  const [zoomInOut, setZoomInOut] = useState(true);
  const addClick = () => {
    navigate("/addschedule");
  };

  const navData = true;

  const active = useSelector((state) => state.date.active);
  console.log(active);
  return (
    <MainWrap>
      <Nav navData={navData}/>
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" />
        <AddButtoon onClick={addClick}>+</AddButtoon>
      </FixBox>
      <ContentWrap>
        <ToggleBtn>
          {weekMonth ? (
            <>
              {zoomInOut ? (
                <button
                  onClick={() => {
                    setZoomInOut(!zoomInOut);
                  }}
                >
                  <img src={zoomin} alt="월별달력확대" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setZoomInOut(!zoomInOut);
                  }}
                >
                  <img src={zoomout} alt="월별달력축소" />
                </button>
              )}
            </>
          ) : (
            <div></div>
          )}
          <WeekMonth
            onClick={() => {
              setWeekMonth(!weekMonth);
            }}
          >
            {weekMonth ? (
              <Circle weekMonth={weekMonth}>M</Circle>
            ) : (
              <Circle weekMonth={weekMonth}>W</Circle>
            )}
          </WeekMonth>
        </ToggleBtn>
        {weekMonth ? <MonthSchedule /> : <WeekSchedule />}
        {active?.isActive ? <DailyList /> : <MonthList />}
      </ContentWrap>
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div`
  position: relative;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 12px;
  background-color: var(--blue1);
  overflow: hidden;
  height: calc(812px - 236px);
  overflow-y: scroll;
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WeekMonth = styled.button`
  height: 27px;
  width: 52px;
  border-radius: 13px;
  padding: 0 5px;
  background-color: var(--blue2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 0px 8px 0px #3284ff45 inset;
  box-shadow: 0px -1px 2px 0px #ffffff75;
  justify-content: ${(props) => (props.weekMonth ? "flex-end" : "flex-start")};
`;
const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 8px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: ${(props) => (props.weekMonth ? "var(--blue4)" : "#fff")};
  background-color: ${(props) => (props.weekMonth ? "#fff" : "var(--blue4)")};
`;
const FixBox = styled.div`
  width: calc(100% - 20px);
  padding: 9px 22px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -7px 11px rgba(50, 132, 255, 0.1);
  background-color: #fff;
  z-index: 999;
`;
const Search = styled.input`
  padding: 18px 0;
  border: 1px solid var(--blue2);
  border-radius: 32px;
  width: 243px;
  padding-left: 27px;
  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);
  }
  &:focus {
    outline: none;
  }
  width: 243px;
`;
const AddButtoon = styled.button`
  width: 60px;
  height: 60px;
  background-color: var(--blue4);
  text-align: center;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
