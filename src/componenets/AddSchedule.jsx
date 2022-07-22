import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import img1 from "../assets/img/sticker/Group 1.png";
import img2 from "../assets/img/sticker/Group 2.png";
import img3 from "../assets/img/sticker/Group 3.png";
import img4 from "../assets/img/sticker/Group 4.png";
import img5 from "../assets/img/sticker/Group 5.png";
import img6 from "../assets/img/sticker/Group 6.png";
import img7 from "../assets/img/sticker/Group 7.png";
import img8 from "../assets/img/sticker/Group 8.png";
import cover1 from "../assets/img/cover/cover1.jpg";
import cover2 from "../assets/img/cover/cover2.jpg";
import cover3 from "../assets/img/cover/cover3.jpg";
import cover4 from "../assets/img/cover/cover4.jpg";
import time from "../assets/img/icon/Time.png";
import location from "../assets/img/icon/Location.png";
import element from "../assets/img/icon/element-4.png";
import { SchduleDB } from "../redux/modules/post";
import "date-fns";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { monthList } from "../redux/modules/schedule";
import dayjs from "dayjs";
const AddSchedule = ({ value, onChange, ...others }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [stickerShow, setStickerShow] = useState(false);
  const [coverShow, setCoverShow] = useState(false);

  const [color, setColor] = useState("");
  const [sticker, setSticker] = useState("");
  const [image, setImage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [memo, setMemo] = useState("");
  const [cover, setCover] = useState(
    "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
  );
  const [colorPick, setColorPick] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [dispatchTime, setDispatchTime] = useState(dayjs());

  const now = dayjs().hour(0).minute(0);
  const handleValueChange = (value) => {
    setDispatchTime(value);
  };
  const addClick = () => {
    navigate("/main");
  };
  const ColorClick = () => {
    setColorPickerShow(!colorPickerShow);
  };
  const StickerClick = () => {
    setStickerShow(!stickerShow);
  };
  const coverClick = () => {
    setCoverShow(!stickerShow);
  };

  const colorChange = (e) => {
    setColor(e.target.id);
    setColorPick(e.target.value);
    setColorPickerShow(!colorPickerShow);
  };
  const stickerChange = (e) => {
    setSticker(e.target.id);
    setStickerShow(!stickerShow);
  };
  const coverChange = (e) => {
    setCover(e.target.value);
    setImage(e.target.id);
    setCoverShow(!coverShow);
  };
  let [week, month, day, year, sTime] = startDate.toString().split(" ");
  let Week = (week) => {
    if (week === "Sun") return "01";
    if (week === "Mon") return "02";
    if (week === "Tue") return "03";
    if (week === "Wed") return "04";
    if (week === "Thu") return "05";
    if (week === "Fri") return "06";
    if (week === "Sat") return "07";
  };
  let Month = (month) => {
    if (month === "Jan") return "01";
    if (month === "Feb") return "02";
    if (month === "Mar") return "03";
    if (month === "Apr") return "04";
    if (month === "May") return "05";
    if (month === "Jun") return "06";
    if (month === "Jul") return "07";
    if (month === "Aug") return "08";
    if (month === "Sep") return "09";
    if (month === "Oct") return "10";
    if (month === "Nov") return "11";
    if (month === "Dec") return "12";
  };
  let [hour, minute, second] = dispatchTime.toString().split(" ")[4].split(":");

  const allDate = `${year}-${Month(month)}-${day} ${hour}:${minute}:00`;

  const addScheduleBtn = async () => {
    dispatch(
      SchduleDB({
        image: Number(image),
        companyName, //필수입력
        title, //필수입력
        sticker: Number(sticker),
        date: allDate, //필수입력
        place, //필수입력
        memo,
        color: Number(color),
      })
    );
    navigate("/main");
  };

  return (
    <AddSchesuleWrap>
      <Header style={{ backgroundImage: `url(${cover})` }}>
        <AddFlex>
          <Btn onClick={addClick}>&lt;</Btn>
          <Btn onClick={addScheduleBtn}>저장</Btn>
        </AddFlex>
        <BtnFlex>
          <TitleInput>
            <AddBtn onClick={StickerClick}>스티커 추가</AddBtn>
            {stickerShow ? (
              <List>
                <label htmlFor="1">
                  <Input
                    type="radio"
                    name="sticker"
                    id="1"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img1} />
                </label>
                <label htmlFor="2">
                  <Input
                    type="radio"
                    name="sticker"
                    id="2"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img2} />
                </label>
                <label htmlFor="3">
                  <Input
                    type="radio"
                    name="sticker"
                    id="3"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img3} />
                </label>
                <label htmlFor="4">
                  <Input
                    type="radio"
                    name="sticker"
                    id="4"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img4} />
                </label>
                <label htmlFor="5">
                  <Input
                    type="radio"
                    name="sticker"
                    id="5"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img5} />
                </label>
                <label htmlFor="6">
                  <Input
                    type="radio"
                    name="sticker"
                    id="6"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img6} />
                </label>
                <label htmlFor="7">
                  <Input
                    type="radio"
                    name="sticker"
                    id="7"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img7} />
                </label>
                <label htmlFor="8">
                  <Input
                    type="radio"
                    name="sticker"
                    id="8"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img8} />
                </label>
              </List>
            ) : (
              ""
            )}
          </TitleInput>
          <TitleInput>
            <AddBtn onClick={coverClick}>커버 변경</AddBtn>
            {coverShow ? (
              <List>
                <label htmlFor="1">
                  <Input
                    type="radio"
                    name="cover"
                    id="1"
                    value="cover1"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover1} />
                  </CoverImg>
                </label>
                <label htmlFor="2">
                  <Input
                    type="radio"
                    name="cover"
                    id="2"
                    value="cover2"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover2} />
                  </CoverImg>
                </label>
                <label htmlFor="3">
                  <Input
                    type="radio"
                    name="cover"
                    id="3"
                    value="cover3"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover3} />
                  </CoverImg>
                </label>
                <label htmlFor="4">
                  <Input
                    type="radio"
                    name="cover"
                    id="4"
                    value="cover4"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover4} />
                  </CoverImg>
                </label>
              </List>
            ) : (
              ""
            )}
          </TitleInput>
        </BtnFlex>
      </Header>
      <AddList>
        <InputText
          type="text"
          placeholder="회사 이름"
          onChange={(event) => {
            setCompanyName(event.target.value);
          }}
        />
        <TitleInput>
          <InputText
            type="text"
            placeholder="제목"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <ColorPicker onClick={ColorClick} colorPick={colorPick} />
          {colorPickerShow ? (
            <ColorList>
              <Color1 htmlFor="1"></Color1>
              <Input
                type="radio"
                name="color"
                id="1"
                value="#fff"
                onChange={colorChange}
              />
              <Color2 htmlFor="2"></Color2>
              <Input
                type="radio"
                name="color"
                id="2"
                value="var(--point3)"
                onChange={colorChange}
              />
              <Color3 htmlFor="3"></Color3>
              <Input
                type="radio"
                name="color"
                id="3"
                value="rgba(253, 187, 110, 1)"
                onChange={colorChange}
              />
              <Color4 htmlFor="4"></Color4>
              <Input
                type="radio"
                name="color"
                id="4"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />

              <Color5 htmlFor="5"></Color5>
              <Input
                type="radio"
                name="color"
                id="5"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color6 htmlFor="6"></Color6>
              <Input
                type="radio"
                name="color"
                id="6"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color7 htmlFor="7"></Color7>
              <Input
                type="radio"
                name="color"
                id="7"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color8 htmlFor="8"></Color8>
              <Input
                type="radio"
                name="color"
                id="8"
                value="rgba(154, 154, 154, 1)"
                onChange={colorChange}
              />
            </ColorList>
          ) : (
            ""
          )}
        </TitleInput>
        <DateContainer>
          <p>일정</p>
          <Pick>
            <DateWrap>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM-dd (eee)"
                locale={ko}
              />
            </DateWrap>
            <Div>
              <TimePicker
                locale={ko}
                showSecond={false}
                minuteStep={5}
                {...others}
                use12Hours={true}
                value={dispatchTime}
                defaultValue={now}
                onChange={handleValueChange}
                format="a HH:mm"
                showTime={{ use12Hours: true, format: "a HH:mm" }}
              />
            </Div>
          </Pick>
        </DateContainer>

        <InputText
          type="text"
          placeholder="장소"
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <TextArea
          placeholder="메모"
          onChange={(event) => {
            setMemo(event.target.value);
          }}
        />
      </AddList>
    </AddSchesuleWrap>
  );
};

export default AddSchedule;
const AddSchesuleWrap = styled.div`
  background-color: var(--blue1);
  width: 100%;
  height: 100%;
  font-weight: 500;

  input {
    outline: none;
    padding: 18px;
    background: #ffffff;
    border-radius: 6px;
    border: 0;
    outline: none;
    font-weight: 500;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const Btn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  background-color: var(--blue4);
  border: 1px solid #fff;
  padding: 6px 10px;
  border-radius: 8px;
`;
const AddBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: var(--blue3);
  background-color: #fff;
  border: 1px solid var(--blue1);
  padding: 6px 10px;
  border-radius: 8px;
`;
const AddList = styled.section`
  width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DateContainer = styled.div`
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  padding: 18px;
  border-radius: 6px;

  p {
    color: var(--blue3);
  }
`;
const Pick = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 1;
    width: 50%;
    input {
      padding: 0;
      text-align: center;
    }
  }
`;
const Header = styled.div`
  width: 90%;
  padding: 5%;
  height: 150px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const AddFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
const InputText = styled.input`
  width: 90%;
  padding: 10px;
`;
const TextArea = styled.textarea`
  width: 90%;
  padding: 18px;
  border: 0;
  ::placeholder {
    color: var(--blue3);
    font-weight: 500;
    font-size: 16px;
  }
  :focus {
    outline: none;
  }
`;
const TitleInput = styled.label`
  position: relative;
`;
const ColorPicker = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) =>
    props.colorPick ? props.colorPick : "var(--gray2)"};
  border-radius: 100%;
  border: 5px solid var(--gray1);
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
const List = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: -14px;
  display: flex;
  background-color: #fff;
  gap: 10px 15px;
  flex-wrap: wrap;
  border: 1px solid var(--gray2);
  border-radius: 15px;
  padding: 8px 12px;
  width: 185px;
  z-index: 99;
`;

const ColorList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 59px;
  padding: 16px;
  width: 100%;
  border-radius: 6px;
  background: var(--blue1);
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
    inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  z-index: 99;
`;
const Input = styled.input`
  display: none;
`;
const Color1 = styled.label`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color2 = styled.label`
  background-color: var(--point3);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color3 = styled.label`
  background-color: rgba(253, 187, 110, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color4 = styled.label`
  background-color: rgba(253, 247, 110, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color5 = styled.label`
  background-color: rgba(110, 253, 150, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color6 = styled.label`
  background-color: rgba(110, 218, 253, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color7 = styled.label`
  background-color: rgba(130, 110, 253, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const Color8 = styled.label`
  background-color: var(--gray2);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
`;
const StickerImg = styled.img`
  width: 50px;
  height: 50px;
`;
const CoverImg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  img {
    height: 100%;
  }
`;
const DateWrap = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker-popper {
    width: 90%;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    border: 1px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-datepicker__header {
    padding-top: 0.8em;
    background-color: white;
    width: 100%;
    max-width: 330px;
    margin: auto;
    border: none;
  }
  .react-datepicker__month {
    margin: 0.4em;
  }
  .react-datepicker__day-name {
    margin: 3%;
    font-size: 12px;
    font-weight: 500;
    color: #959595;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 25px;
  }
  .react-datepicker__day {
    width: 25px;
    height: 25px;
    font-size: 12px;
    margin: 3%;
    line-height: 1.8;
    text-align: center;
    background-color: #fff;
  }
  .react-datepicker__day:hover {
    background-color: transparent;
  }
  .fomrmatDate {
    font-size: 22px;
    font-weight: 500;
  }
  .react-datepicker__day--selected {
    background-color: var(--blue4);
    border-radius: 100%;
    border: none;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
  }
  .react-datepicker__day--keyboard-selected {
    color: #000;
  }
  .react-datepicker__input-container {
    cursor: pointer;
    width: 100%;
  }
  .react-datepicker-ignore-onclickoutside {
    width: 100%;
    ::placeholder {
      color: var(--blue3);
    }
    color: var(--blue3);
  }

  input {
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);

    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
  }
`;
const Div = styled.div`
  width: 100%;
  input {
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);

    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
  }
  .rc-time-picker-input {
    width: 100%;
  }
  .rc-time-picker-clear {
    display: none;
  }
`;
