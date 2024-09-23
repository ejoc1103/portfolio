import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Profile from '../public/Profile.png';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    overflow-y:visible;
  }
`

const ContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  color: ${({ theme }) => theme.textOne};
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  justify-self: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding-bottom: 50px;
`;

const HeaderStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 2.5em;
  width: 100%;
  padding: 2rem;
  @media (max-width: 550px) {
    font-size: 2em;
  }
`;
const InfoContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 90%;
`;
const PicContainerStyled = styled(motion.div)`
  background-color: ${({ theme }) => theme.primaryColor};
  grid-row: span 2;
  @media (max-width: 500px) {
    grid-column: span 2;
    padding: 40px;
    border: 2px solid ${({ theme }) => theme.thirdColor};
  }
`;
const ProfileImageStyled = styled(Image)``;
const SubheadStyled = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.thirdColor};
  @media (max-width: 880px) {
    grid-row: span 2;
  }
  @media (max-width: 500px) {
    grid-column: span 2;
  }
`;
const InfoStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 1.5em;
  color: white;
  padding: 2% 20% 2% 20%;
  @media (max-width: 880px) {
    grid-column: span 2;
  }
`;
const SkillsContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
`;
const InfoStyledTwo = styled(motion.div)`
  display: ${({ $heightcheck }) => ($heightcheck ? 'grid' : 'none')};
  align-items: center;
  justify-items: center;
  gap: 25px;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 1.5em;
  color: white;
  padding: 2% 15% 2% 15%;
  height: ${({ $heightcheck }) => ($heightcheck ? 'auto' : '0px')};
`;
const FullStoryStyled = styled(motion.div)`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr;
  padding-bottom: 50px;
`;
const DivStyled = styled(motion.div)`
  width: 80%;
  padding: 5px;
  border-radius: 25%;
  justify-self: center;
  align-self: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;
const ButtonStyled = styled(motion.button)`
  display: grid;
  background-color: ${({ theme }) => theme.secondaryColor};
  width: 100px;
  gap: 10px;
  padding: 10px;
`;
const XStyled = styled(motion.h1)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
`;
const ParagraphsStyled = styled(motion.p)`
  display: ${({ $heightcheck }) => ($heightcheck ? 'block' : 'none')};
`;
export default function About() {
  const [toggleStory, setToggleStory] = useState(false);
  //Header Motion Variants to slide in the header from the left
  const headerVar = {
    hidden: { x: -2000 },
    show: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  //Image Motion Variants to fade in the picture
  const imageVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };
  //TLDR Text Motion variants to slide in the text from the top
  const firstInfoVar = {
    hidden: { y: -2000 },
    show: {
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  //Full Story Div motion variants to slide in the div from the bottom
  const fullStoryVar = {
    hidden: { y: 2000 },
    show: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  //Full Inof Text Variants to make the words fade in after they are opened
  const fullInfoVar = {
    hidden: { opacity: 0, height: '0px' },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <GlobalStyle />
      <ContainerStyled key='c1'>
        <InfoContainerStyled
          key='c5'
          variants={firstInfoVar}
          initial='hidden'
          animate='show'
        >
          <PicContainerStyled
            key='c3'
            variants={imageVar}
            initial='hidden'
            animate='show'
          >
            <ProfileImageStyled
              key='c4'
              src={Profile}
              alt='Profile'
              layout='responsive'
            />
          </PicContainerStyled>
          <SubheadStyled key='c5'>
            <h1>A Little About Me:</h1>
          </SubheadStyled>
          <InfoStyled key='c6'>
            <h4>Full Stack Developer | Problem Solver | Team Builder</h4>
            <h4>Father | Husband | Beach Bum</h4>
            <h5>
              Web Developer with hands-on experience in developing a variety of
              websites by leveraging advanced skills in Frontend and Backend
              programming.
            </h5>

          </InfoStyled>
        </InfoContainerStyled>
        <SkillsContainerStyled>
          <SubheadStyled>
            <h2>Skills</h2>
          </SubheadStyled>
          <InfoStyled>
            <p>
              Java | PostgreSQL | JSON | Spring Boot | Restful APIs | JavaScript | HTML & CSS | Vue.js | Unit Testing (JUnit) | Git |
              IntelliJ & VSCode | SQL | E/R diagrams | Agile | Responsive Web Design | React.js | NextJs | GraphQl | Python |
              Bootstrap | MongoDB | JDBC | Integration Testing
            </p>
          </InfoStyled>
        </SkillsContainerStyled>
        <FullStoryStyled
          key='c7'
          variants={fullStoryVar}
          initial='hidden'
          animate='show'
        >
          <SubheadStyled key='c8'>
            <h2>Full Story:</h2>
            <ButtonStyled
              key='c9'
              onClick={() => setToggleStory(prevState => !prevState)}
            >
              {toggleStory ? (
                <XStyled>X</XStyled>
              ) : (
                <>
                  <DivStyled></DivStyled>
                  <DivStyled></DivStyled>
                  <DivStyled></DivStyled>
                </>
              )}
            </ButtonStyled>
          </SubheadStyled>

          <InfoStyledTwo
            key='c10'
            $heightcheck={toggleStory}
            variants={fullInfoVar}
            animate={toggleStory ? 'show' : 'hidden'}
          >
            <ParagraphsStyled $heightcheck={toggleStory}>
              {`I'm Ed O’Connor, I'm and endlessly curious problem solver! My experience at all levels of retail from part time sales associate to Lead of operations, has given me a strong foundation in problem-solving, leadership, and achieving ambitious goals.`}
            </ParagraphsStyled>

            <ParagraphsStyled $heightcheck={toggleStory}>
              {`Driven by that love of problem solving and a desire to contribute to impactful projects, I’m transitioning into software engineering. Currently, I’m focused on mastering both front-end and back-end development, utilizing technologies like Java, Spring Boot, Vue.js, PostgreSQL`}
            </ParagraphsStyled>

            <ParagraphsStyled $heightcheck={toggleStory}>
              {
                `I’m attending Tech Elevator, a top-tier software development bootcamp, to jumpstart my career in software engineering. This immersive experience is equipping me with the practical skills and hands-on training needed to make an immediate impact in the tech industry.`
              }
            </ParagraphsStyled>

            <ParagraphsStyled $heightcheck={toggleStory}>
              {
                `I'm so excited to bring my well crafted communication and team building skills into a new industry. I can't wait to bring those  talents along with my ever expanding technical skills to a software developer role. Feel free to connect with me through my contact page below if you'd like to discuss opportunities or learn more about how my skills and experience can contribute to your team.`
              }
            </ParagraphsStyled>
          </InfoStyledTwo>
        </FullStoryStyled>
        <Navbar />
      </ContainerStyled>
    </>
  );
}
