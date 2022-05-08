import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, animate } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Profile from '../public/Profile.jpg';

const ContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  color: ${({ theme }) => theme.textOne};
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding-bottom: 50px;
`;

const HeaderStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 2.5em;
  grid-column: span 2;
  width: 100%;
  padding: 2rem;
`;
const TldrStyled = styled(motion.div)`
  width: 75%;
  display: grid;
  grid-column: span 2;
  grid-template-columns: 1fr 2fr;
`;
const PicContainerStyled = styled(motion.div)`
  background-color: ${({ theme }) => theme.textOne};
  float: left;
`;
const ProfileImageStyled = styled(Image)``;
const InfoContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
`;
const SubheadStyled = styled.div`
  font-size: 2em;
  background-color: ${({ theme }) => theme.thirdColor};
  text-align: center;
  > h2 {
    font-family: ExtraBold 800 Italic;
  }
`;
const InfoStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 1.5em;
  color: white;
  padding: 2% 20% 2% 20%;
`;
const InfoStyledTwo = styled(motion.div)`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 25px;
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 1.5em;
  color: white;
  padding: 2% 15% 2% 15%;
`;
const FullStoryStyled = styled(motion.div)`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr;
  grid-column: span 2;
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
const ParagraphsStyled = styled(motion.p)``;
export default function About() {
  const [toggleStory, setToggleStory] = useState(false);

  const mainVar = {
    hidden: { opacity: 0.9 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 2,
      },
    },
  };
  const headerVar = {
    hidden: { x: -2000 },
    show: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const imageVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const firstInfoVar = {
    hidden: { y: 2000 },
    show: {
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const fullStoryVar = {
    hidden: { x: -2000 },
    show: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const fullInfoVar = {
    hidden: { opacity: 0, height: '0px' },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 1,
        delayChildren: 2,
        staggerChildren: 2,
      },
    },
  };
  const pVar = {
    hidden: { x: -2000 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(toggleStory);
  return (
    <AnimatePresence>
      <ContainerStyled
        key='c1'
        variants={mainVar}
        initial='show'
        animate='show'
      >
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
        <TldrStyled key='c2'>
          <PicContainerStyled
            key='c3'
            variants={imageVar}
            initial='hidden'
            animate='show'
          >
            <ProfileImageStyled key='c4' src={Profile} alt='Profile' />
          </PicContainerStyled>
          <InfoContainerStyled
            key='c5'
            variants={firstInfoVar}
            initial='hidden'
            animate='show'
          >
            <SubheadStyled key='c5'>
              <h2>TLDR:</h2>
            </SubheadStyled>
            <InfoStyled key='c6'>
              <p>
                Web Developer with hands-on experience in developing a variety
                of websites by leveraging advanced skills in Frontend and
                Backend programming.
              </p>
            </InfoStyled>
          </InfoContainerStyled>
        </TldrStyled>
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
          <AnimatePresence>
            <InfoStyledTwo
              key='c10'
              variants={fullInfoVar}
              animate={toggleStory ? 'show' : 'hidden'}
            >
              <ParagraphsStyled
                key='p1'
                variants={pVar}
                initial='hidden'
                animate='show'
              >
                {`Hello Everyone! I'm Ed O’Connor, a meticulous and diligent
          professional with a proven track record of managing daily store
          operations while adhering to set company standards. Throughout my
          career, I have remained a resourceful and results-driven professional
          with a record of leading and building top-performing teams to boost
          operational effectiveness.`}
              </ParagraphsStyled>

              <ParagraphsStyled
                key='p2'
                variants={pVar}
                initial='hidden'
                animate='show'
              >
                {` 
          I have a remarkable background in managing,
          planning, and implementing tactical sales/marketing strategies to
          achieve ambitious sales goals. I'm capable of collaborating closely
          with senior web developers to plan and execute new web features.
          Expert in connecting web applications to backend server data using
          JavaScript language. 
          `}
              </ParagraphsStyled>

              <ParagraphsStyled
                key='p3'
                variants={pVar}
                initial='hidden'
                animate='show'
              >
                {`
          My soft skills are second to none. Connect with
          me today or send me an email at ejoc1103@gmail.com if you want to
          discuss additional details regarding my work experience and the skills
          I have to offer.`}
              </ParagraphsStyled>
            </InfoStyledTwo>
          </AnimatePresence>
        </FullStoryStyled>
        <Navbar />
      </ContainerStyled>
    </AnimatePresence>
  );
}
