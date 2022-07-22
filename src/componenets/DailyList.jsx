import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Dayjs from "dayjs";
import "dayjs/locale/ko";
import img1 from "../assets/img/sticker/Group 1.png";
import img2 from "../assets/img/sticker/Group 2.png";
import img3 from "../assets/img/sticker/Group 3.png";
import img4 from "../assets/img/sticker/Group 4.png";
import img5 from "../assets/img/sticker/Group 5.png";
import img6 from "../assets/img/sticker/Group 6.png";
import img7 from "../assets/img/sticker/Group 7.png";
import img8 from "../assets/img/sticker/Group 8.png";
const DailyList = () => {
  Dayjs.locale("ko");
  const [mmm, setmmm] = useState();
  const dailySchedule = useSelector((state) => state.schedule.daily);

  useEffect(() => {
    if (dailySchedule) {
      const dailyList = [...dailySchedule?.manual, ...dailySchedule?.auto];
      dailyList.sort(function (a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
      setmmm(dailyList);
    }
  }, [dailySchedule]);

  let [week, mm, day, yy, sTime] = new Date().toString().split(" ");

  let Month = (mm) => {
    if (mm === "Jan") return "01";
    if (mm === "Feb") return "02";
    if (mm === "Mar") return "03";
    if (mm === "Apr") return "04";
    if (mm === "May") return "05";
    if (mm === "Jun") return "06";
    if (mm === "Jul") return "07";
    if (mm === "Aug") return "08";
    if (mm === "Sep") return "09";
    if (mm === "Oct") return "10";
    if (mm === "Nov") return "11";
    if (mm === "Dec") return "12";
  };

  const today = `${yy}-${Month(mm)}-${day}`;

  const list =
    mmm &&
    mmm?.map((value, idx) => (
      <ScheduleListWrap key={idx}>
        <DayFlex>
          <Day>
            {value.date.split(" ")[0].split("-")[0]}년{" "}
            {value.date.split(" ")[0].split("-")[1]}월{" "}
            {value.date.split(" ")[0].split("-")[2]}일{" "}
          </Day>

          <Dday>
            {new Date(value.date.split(" ")[0]) - new Date(today) > 0
              ? `D- ${Math.floor(
                  (new Date(value.date.split(" ")[0]) - new Date(today)) /
                    (1000 * 60 * 60 * 24)
                )}`
              : new Date(value.date.split(" ")[0]) - new Date(today) !== 0
              ? `D+ ${Math.floor(
                  (new Date(today) - new Date(value.date.split(" ")[0])) /
                    (1000 * 60 * 60 * 24)
                )}`
              : "D-day"}
          </Dday>
        </DayFlex>
        <ScheduleItem>
          <TimeText>
            {value.date.split(" ")[1].split(":")[0]}:
            {value.date.split(" ")[1].split(":")[1]}
          </TimeText>
          <Color color={value.color}></Color>
          <Text>{value.title}</Text>
          {value?.sticker === 1 ? (
            <Sticker>
              <img src={img1} />
            </Sticker>
          ) : value?.sticker === 2 ? (
            <Sticker>
              <img src={img2} />
            </Sticker>
          ) : value?.sticker === 3 ? (
            <Sticker>
              <img src={img3} />
            </Sticker>
          ) : value?.sticker === 4 ? (
            <Sticker>
              <img src={img4} />
            </Sticker>
          ) : value?.sticker === 5 ? (
            <Sticker>
              <img src={img5} />
            </Sticker>
          ) : value?.sticker === 6 ? (
            <Sticker>
              <img src={img6} />
            </Sticker>
          ) : value?.sticker === 7 ? (
            <Sticker>
              <img src={img7} />
            </Sticker>
          ) : value?.sticker === 8 ? (
            <Sticker>
              <img src={img8} />
            </Sticker>
          ) : (
            ""
          )}
        </ScheduleItem>
      </ScheduleListWrap>
    ));
  return <Container>{list}</Container>;
};

export default DailyList;

const Container = styled.div`
  padding-bottom: 78px;
`;
const ScheduleListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;
const ScheduleItem = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
`;
const DayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Color = styled.div`
  width: 3px;
  height: 32px;
  border-radius: 6px;
  background-color: ${(props) => (props.color === 1 ? "#fff" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) =>
    props.color === 3 ? "rgba(253, 187, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 4 ? "rgba(253, 247, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 5 ? "rgba(110, 253, 150, 1)" : ""};
  background-color: ${(props) =>
    props.color === 6 ? "rgba(110, 218, 253, 1)" : ""};
  background-color: ${(props) =>
    props.color === 7 ? "rgba(130, 110, 253, 1)" : ""};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
`;
const Day = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue4);
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--point2);
`;
const TimeText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue3);
  padding: 6px 9px;
`;
const Text = styled.p`
  flex: 7;
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
`;
const Sticker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  > img {
    width: 100%;
  }
`;
