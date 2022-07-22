import { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "short-react-calendar";
import { useSelector } from "react-redux";
const WeekSchedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <WeekWrap>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        oneWeekCalendar={true}
        className="Week"
      />
    </WeekWrap>
  );
};
export default WeekSchedule;
const WeekWrap = styled.div`
  .calendar-footer {
    display: none !important;
  }
  .react-calendar {
    height: 202px;
    background-color: transparent !important;
    border: 0;
  }
  .react-calendar__navigation {
    background-color: transparent !important;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: transparent !important;
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:hover {
    background-color: #fff;
    abbr {
      border: 1px solid var(--blue4);
      border-radius: 100%;
      padding: 6px;
      font-weight: 900;
      font-size: 14px;
      color: var(--blue4);
    }
  }
  .react-calendar__month-view > div > div {
    display: flex;
    flex-direction: column;
  }
  .react-calendar__month-view__weekdays__weekday {
    border-radius: 21px 21px 0 0 !important;
    :nth-child(1) {
      background-color: ${(props) =>
        props.weekNumber === 1 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 1 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(2) {
      background-color: ${(props) =>
        props.weekNumber === 2 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 2 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(3) {
      background-color: ${(props) =>
        props.weekNumber === 3 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 3 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(4) {
      background-color: ${(props) =>
        props.weekNumber === 4 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 4 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(5) {
      background-color: ${(props) =>
        props.weekNumber === 5 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 5 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(6) {
      background-color: ${(props) =>
        props.weekNumber === 6 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 6 ? "#fff" : "var(--black)")};
      }
    }
    :nth-child(7) {
      background-color: ${(props) =>
        props.weekNumber === 7 ? "var(--blue4)" : "#fff"};
      abbr {
        color: ${(props) => (props.weekNumber === 7 ? "#fff" : "var(--black)")};
      }
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--active:hover {
    position: relative;
    background-color: var(--blue4) !important;
    border-radius: 0 0 21px 21px !important;

    border: 1px solid var(--blue4);
    border-radius: 100%;
    padding: 6px;
    background-color: #fff;
    color: var(--blue4);
    font-weight: 900;
    font-size: 14px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #fff;
    border-radius: 6px;
  }
  .react-calendar__viewContainer {
    background-color: #fff;
  }
`;
