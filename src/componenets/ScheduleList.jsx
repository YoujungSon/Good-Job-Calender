import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Dayjs from "dayjs";
import "dayjs/locale/ko";

const ScheduleList = () => {
  Dayjs.locale("ko");
  const [mmm, setmmm] = useState();
  const monthSchdule = useSelector((state) => state.schedule.month);

  useEffect(() => {
    if (monthSchdule) {
      const monthlist = [...monthSchdule?.manual, ...monthSchdule?.auto];
      monthlist.sort(function (a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
      setmmm(monthlist);
    }
  }, [monthSchdule]);
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
        </ScheduleItem>
      </ScheduleListWrap>
    ));
  return <Container>{list}</Container>;
};

export default ScheduleList;

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
  background-color: var(--point3);
  border-radius: 6px;
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
