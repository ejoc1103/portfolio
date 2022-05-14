import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Profile from '../public/Profile.jpg';

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
  align-items: center;
  font-size: 3em;
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
    <ContainerStyled key='c1'>
      <HeaderStyled key='h1'>
        <motion.h1
          key='h2'
          variants={headerVar}
          initial='hidden'
          animate='show'
        >
          About Me
        </motion.h1>
      </HeaderStyled>

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
          <h2>TLDR:</h2>
        </SubheadStyled>
        <InfoStyled key='c6'>
          <p>
            Web Developer with hands-on experience in developing a variety of
            websites by leveraging advanced skills in Frontend and Backend
            programming.
          </p>
        </InfoStyled>
      </InfoContainerStyled>
      <SkillsContainerStyled>
        <SubheadStyled>
          <h2>Skills</h2>
        </SubheadStyled>
        <InfoStyled>
          <p>
            Javascript | ReactJs | GraphQL | TypeScript | jQuery | CSS5 |
            Tailwind CSS | StyledComponents | NodeJs | HTML5 | Bootstrap | MySQL
            | ExpressJs | Apollo | API Integration | Asynchronous Javascript
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
            {`Hello Everyone! I'm Ed O’Connor, a meticulous and diligent
          professional with a proven track record of managing daily store
          operations while adhering to set company standards. Throughout my
          career, I have remained a resourceful and results-driven professional
          with a record of leading and building top-performing teams to boost
          operational effectiveness.`}
          </ParagraphsStyled>

          <ParagraphsStyled $heightcheck={toggleStory}>
            {` 
          I have a remarkable background in managing,
          planning, and implementing tactical sales/marketing strategies to
          achieve ambitious sales goals. I'm capable of collaborating closely
          with senior web developers to plan and execute new web features.
          `}
          </ParagraphsStyled>

          <ParagraphsStyled $heightcheck={toggleStory}>
            {`
          My soft skills are second to none. Connect with
          me through my connect page or send me directly at ejoc1103@gmail.com if you want to
          discuss additional details regarding my work experience and the skills
          I have to offer.`}
          </ParagraphsStyled>
        </InfoStyledTwo>
      </FullStoryStyled>
      <Navbar />
    </ContainerStyled>
  );
}
