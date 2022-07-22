import React from "react";
import styled from "styled-components";

// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

// 카카오
import { KAKAO_AUTH_URL } from "../shared/api";

// 이미지
import logo from "../assets/img/logo.png";
import illust1 from "../assets/img/sticker/Group 4.png";
import illust2 from "../assets/img/sticker/Group 2.png";
import illust3 from "../assets/img/sticker/Group 3.png";
import kakaologo from "../assets/img/icon/kakaobtn.png";

const Home = () => {
  return (
    <HomeWrap>
      <header>
        <img
          src="https://i.jobkorea.kr/content/images/ver_1/gnb/jk_logo.png?20190718"
          alt="로고"
        />
        <Title>당신의 취준 메이트</Title>
        <SubTitle>굿잡 캘린더</SubTitle>
      </header>
      <main>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper1"
          centeredSlides={true}
          spaceBetween={50}
        >
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={illust1} alt="일러스트" />
              </div>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={illust2} alt="일러스트" />
              </div>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={illust3} alt="일러스트" />
              </div>
            </SlideBox>
          </SwiperSlide>
        </Swiper>
        <Logo>
          <img src={logo} alt="로고" />
        </Logo>
      </main>
      <FooterWrap>
        <EmailBtn>
          <Link to="/signup">이메일로 시작</Link>
        </EmailBtn>
        <KaKaoBtn>
          <Link to={KAKAO_AUTH_URL}>
            <img src={kakaologo} alt="카카오로고" />
            카카오톡 간편 로그인
          </Link>
        </KaKaoBtn>
        <LoginBtn>
          <Link to="/login">로그인 하기</Link>
        </LoginBtn>
      </FooterWrap>
    </HomeWrap>
  );
};

export default Home;
const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 35px;
  background-color: var(--blue1);
  overflow: hidden;
  .mySwiper1 {
    margin-top: 34px;
    margin-bottom: 77px;
    overflow: visible;
    .swiper-pagination {
      bottom: -34px;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: var(--blue2);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: var(--blue4);
    }
  }
`;
const Title = styled.p`
  font-size: 14px;
  margin-top: 13px;
  margin-bottom: 2px;
`;
const SubTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    width: 268px;
    height: 268px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SlideImg = styled.img`
  width: 70%;
`;
const Logo = styled.div`
  background-color: var(--blue4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: hideSplashScreen 0.4s ease-in-out forwards;
  animation-delay: 1s;
  @keyframes hideSplashScreen {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  z-index: 999;
`;

const EmailBtn = styled.button`
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  > a {
    font-weight: 400;
    font-size: 18px;
    padding: 17px 0;
    width: 100%;
    color: var(--blue3) !important;
    display: block;
  }
`;
const KaKaoBtn = styled.button`
  background: #f8e041;
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  > a {
    padding: 17px 0;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    color: #371f1e !important;
    display: block;
  }
`;
const LoginBtn = styled.button`
  background: var(--blue4);
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  > a {
    padding: 17px 0;
    font-weight: 400;
    font-size: 18px;
    color: #fff !important;
    width: 100%;
    display: block;
  }
`;
const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
