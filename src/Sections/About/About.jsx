import React from "react";
import styled from "styled-components";
import ImageCarousel from "../../utils/ImageCrousel";
import { images } from "../../constants/constants";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  ${"" /* background: no-repeat url("./img/bg.jpg"); */}
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1.5;
  align-items: center;
  justify-content: center;
  margin: auto 5%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 5%;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #f5f5f5;
  
  background: #3530cf;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 1030px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: justify;
  color: lightgray;
  
   @media (max-width: 768px) {
      padding-left: 10px;
      font-size: 16px;
    }
`;

const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Left>
            <ImageCarousel images={images} />
          </Left>
          <Right>
            <Title>About NAMESPACE BPIT</Title>
            <Desc>
            NAMESPACE BPIT (formerly NSCC BPIT), is the dynamic technical society of Bhagwan Parshuram Institute of Technology (BPIT) and a proud subset of The NAMESPACE Community, dedicated to fostering a vibrant community focused on peer support, tech awareness, skill development, and innovation. We organize various activities such as webinars, contests, and events to promote learning and growth among our members. At NAMESPACE BPIT, we cultivate a strong coding culture and provide a platform for members to interact with peers and seniors, creating an environment of collaboration and continuous learning. 
            </Desc>
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default About;
