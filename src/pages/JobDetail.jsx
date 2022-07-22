import React, { useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { loadJobList, loadCategoryList, loadJobDetails, addScrap } from "../redux/modules/job";

import buttonText from "../assets/img/btn/buttonText.png"
import backBtn from "../assets/img/btn/backBtn.png"


const JobDetail = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();

  const id = params.id;

  console.log(id);

  useEffect(() => {
    dispatch(loadJobDetails(id));
  }, []); 

  const jobDetail = useSelector((state) => state.job.details.data);

  console.log(jobDetail);

  return (
    <MainWrap>

      <Header />

      <MainWrapper>


      <CompanyWrap>
        <CompanyName>{jobDetail?.companyName}</CompanyName>
        <CompanySize>{jobDetail?.companyType}</CompanySize>
      </CompanyWrap>

      <JobTitle>{jobDetail?.title}</JobTitle>

      <Line />

      <JobInfo>
        <InfoTitle>모집마감일자</InfoTitle>
        <InfoDetails style={{fontWeight : '800'}}>{jobDetail.deadline.split(" ")[0] === "2122-01-01" ? "상시채용" : '~' + jobDetail.deadline.split(" ")[0]}</InfoDetails>
      </JobInfo>

      <JobInfo>
        <InfoTitle>지원 자격</InfoTitle>
        <InfoDetails>{jobDetail?.career}</InfoDetails>
      </JobInfo>

      <JobInfo>
        <InfoTitle>직무</InfoTitle>
        <InfoDetails>{jobDetail?.job[0]}</InfoDetails>
      </JobInfo>

      <JobInfo>
        <InfoTitle>지역</InfoTitle>
        <InfoDetails>{jobDetail?.city}</InfoDetails>
      </JobInfo>

      <BtnWrap>
        <BackBtn onClick={() => navigate("/job")}>
          <BackBtnImg src={backBtn}/>
        </BackBtn>
        <ScrapBtn onClick={() => dispatch(addScrap(id))}>캘린더로 스크랩</ScrapBtn>
      </BtnWrap>
      
      <JobKoreabtn onClick={() => {window.open(jobDetail?.url)}}>
        <JobKoreaImg src={buttonText}></JobKoreaImg>
      </JobKoreabtn>
      </MainWrapper>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  background: #ECF1F8;
`;

const Header = styled.div`
  width : auto;
  height : 230px;
  background: #3284FF;
  border-radius: 18px;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  height: calc(812px - 236px);
  background: #ECF1F8;
  overflow: hidden;
  overflow-y: scroll;
  padding-top : 40px;
`

const CompanyWrap = styled.div`
  height: 23px;
  display : inline-block;
  padding : 0px 24px;
  display: flex;
  justify-content: space-between;
  line-height : 24px;
  margin-bottom : 12px;
`

const CompanyName = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #3284FF;
`

const CompanySize = styled.div`
  width: auto;
  height: 23px;
  padding: 2px 6px;
  gap: 10px;
  margin-right : 5px;
  background: #A6C9FF;
  border-radius: 19px;
  font-weight: 500;
  font-size: 14px;
  line-height : 26px;
  color: #FFFFFF;
`

const JobTitle = styled.div`
  display : inline-block;
  padding : 12px 24px;
  font-weight: 500;
  font-size: 20px;
  color: #111111;
`

const Line = styled.hr`
  width: 331px;
  height: 0px;
  margin : 15px auto 26px;
  border: 1px solid #D1D1D1;
`

const JobInfo = styled.div`
  height: 20px;
  display : inline-block;
  padding : 12px 24px;
  display: flex;
  justify-content: space-between;
  line-height : 24px;
`

const InfoTitle = styled.p`
font-weight: 500;
font-size: 16px;
color: #3284FF;
`

const InfoDetails = styled.p`
font-weight: 500;
font-size: 16px;
color: #111111;
`

const BtnWrap = styled.div`
  display: flex;
  padding : 12px 16px;
  justify-content: space-between;
  margin-top : 130px;
`

const BackBtn = styled.div`
  width : 167px;
  height : 54px;
  background: #D1D1D1;
  border-radius: 6px;
  cursor : pointer;
  display : flex;
`

const BackBtnImg = styled.img`
width : 99px;
margin : auto;
`

const ScrapBtn = styled.div`
  width : 167px;
  height : 54px;
  background : transparent;
  border-radius: 6px;
  text-align : center;
  line-height : 54px;
  cursor : pointer;
  box-sizing: border-box;
  border: 2px solid #3284FF;
  color: #3284FF;
`

const JobKoreabtn = styled.div`
  width : 343px;
  height : 54px;
  margin : 0px auto 29px;
  background: #3284FF;
  border-radius: 6px;
  display : flex;
  cursor : pointer;
  padding : 7.5px 0px ;
`

const JobKoreaImg = styled.img`
  width : 235px;
  margin : auto;
`

export default JobDetail;

