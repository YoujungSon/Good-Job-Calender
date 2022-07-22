import React from "react";
import styled from "styled-components";
import Dates from "./Dates";

const Body = (props) => {
  const { totalDate, today, month, year } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);
  console.log(lastDate);
  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;
  console.log(findToday);

  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
            findToday={findToday === idx && month === getMonth && findToday}
            month={month}
            year={year}
          ></Dates>
        );
      })}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 7px 7px;
  box-shadow: 0px 3px 9px 0px rgba(116, 160, 227, 0.14);
`;
export default Body;
