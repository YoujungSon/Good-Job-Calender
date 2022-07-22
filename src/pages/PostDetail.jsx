import React, { useEffect } from "react";
import styled from "styled-components";
import arrow from "../assets/img/icon/Back.png";
import update from "../assets/img/icon/Edit.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { detail } from "../redux/modules/schedule";
import { useSelector } from "react-redux";
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
import { deleteSchedule } from "./../redux/modules/schedule";

const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { scheduleId } = useParams();
  const detailInfo = useSelector((state) => state.schedule.detail);
  console.log(detailInfo);
  const addClick = () => {
    navigate("/main");
  };
  console.log(scheduleId);
  useEffect(() => {
    dispatch(detail(scheduleId));
  }, []);
  const updateScheduleBtn = () => {};

  return (
    <>
      <Header>
        <BtnFlex>
          <Btn onClick={addClick}>
            <img src={arrow} alt="뒤로가기" />
          </Btn>
          <Btn onClick={updateScheduleBtn}>
            <img src={update} alt="수정하기" />
          </Btn>
        </BtnFlex>
        <Cover
          src={
            detailInfo?.coverImage === 1
              ? cover1
              : detailInfo?.coverImage === 2
              ? cover2
              : detailInfo?.coverImage === 3
              ? cover3
              : detailInfo?.coverImage === 4
              ? cover4
              : ""
          }
        />
        <Sticker
          src={
            detailInfo?.sticker === 1
              ? img1
              : detailInfo?.sticker === 2
              ? img2
              : detailInfo?.sticker === 3
              ? img3
              : detailInfo?.sticker === 4
              ? img4
              : detailInfo?.sticker === 5
              ? img5
              : detailInfo?.sticker === 6
              ? img6
              : detailInfo?.sticker === 7
              ? img7
              : detailInfo?.sticker === 8
              ? img8
              : ""
          }
        />
      </Header>
      <PostDailWrap>
        <Compony>{detailInfo?.companyName}</Compony>
        <TextWrap>
          <Title>
            <Color color={detailInfo?.color}></Color>
            {detailInfo?.title}
          </Title>
          <DateWrap>
            <p>일정</p>
            <Date>
              <li>
                {detailInfo?.date.split(" ")[0].split("-")[1]}월{" "}
                {detailInfo?.date.split(" ")[0].split("-")[2]}일
              </li>
              <li>
                {detailInfo?.date.split(" ")[1].split(":")[0]}시{" "}
                {detailInfo?.date.split(" ")[1].split(":")[1]}분
              </li>
            </Date>
          </DateWrap>
          <Text>{detailInfo?.place}</Text>
          <Text>{detailInfo?.memo}</Text>
        </TextWrap>
        <Delete
          onClick={() => {
            dispatch(deleteSchedule(scheduleId));
          }}
        >
          일정 삭제하기
        </Delete>
      </PostDailWrap>
    </>
  );
};

export default PostDetail;
const Cover = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
const Sticker = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  position: absolute;
  bottom: -28px;
  right: 40px;
`;
const PostDailWrap = styled.div`
  background-color: var(--blue1);
  height: calc(100% - 150px);
  font-weight: 500;
  padding: 0 16px;
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
const Compony = styled.div`
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
`;
const TextWrap = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  padding: 20px 33px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
`;
const Text = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
`;
const Color = styled.div`
  width: 25px;
  height: 100%;
  background-color: #fd6e6e;
  position: absolute;
  left: 0;
  top: 0;
`;
const DateWrap = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
`;
const Date = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  li {
    flex: 1;
    padding: 10px 0;
  }
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  background-color: transparent;
`;
const Delete = styled.button`
  width: 100%;
  padding: 18px;
  color: #fff;
  background-color: var(--blue4);
  border-radius: 6px;
  margin-top: 25px;
`;
