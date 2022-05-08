import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Udacity from '../public/udacity.png';
import Rutgers from '../public/rutgers.png';

const ContainerStyled = styled.div`
  grid-template-rows: 1fr 5fr 0.5fr;
  padding: 0;
  margin: 0;
  display: grid;
  text-align: center;
  justify-items: center;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textOne};
  padding-bottom: 50px;
`;

const SchoolsStyled = styled(motion.div)`
  display: grid;
  height: 100%;
  width: 80%;
  gap: 5px;
  grid-column: span 2;
  grid-template-columns: 1fr;
  align-content: space-evenly;
  background: ${({ theme }) => theme.thirdColor};
`;
const HeaderStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 2.5em;
`;

const SchoolOneStyled = styled(motion.div)`
  display: grid;
  height: 250px;
  width: 75%;
  grid-template-columns: 2fr 3fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  justify-self: center;
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const SchoolTwoStyled = styled(motion.div)`
  display: grid;
  height: 250px;
  width: 75%;
  justify-self: center;
  grid-template-columns: 3fr 2fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
const SchoolDescriptionStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border: 12px solid ${({ theme }) => theme.textOne};
`;
const ImageStyled = styled(Image)`
  border: 12px solid ${({ theme }) => theme.TextOne};
`;
export default function Education() {
  const headerVar = {
    show: {
      x: [-2000, 250, -200, 50, -20, 0],
      transition: {
        duration: 3,
      },
    },
  };

  const schoolContainerVar = {
    hidden: {
      x: -2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const schoolOneVar = {
    hidden: {
      y: -2000,
    },
    show: {
      y: 0,
      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };
  const schoolTwoVar = {
    hidden: {
      y: 2000,
    },
    show: {
      y: 0,
      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };
  return (
    <ContainerStyled>
      <AnimatePresence>
        <HeaderStyled>
          <motion.h1 variants={headerVar} animate='show'>
            Education
          </motion.h1>
        </HeaderStyled>
      </AnimatePresence>
      <AnimatePresence>
        <SchoolsStyled
          variants={schoolContainerVar}
          initial='hidden'
          animate='show'
        >
          <div></div>
          <SchoolOneStyled
            variants={schoolOneVar}
            initial='hidden'
            animate='show'
          >
            <ImageStyled src={Rutgers} alt='Rutgers' />
            <SchoolDescriptionStyled>
              <h1>Rutgers Coding Bootcamp</h1>
              <h2>Full Stack Web Development</h2>
            </SchoolDescriptionStyled>
          </SchoolOneStyled>
          <div></div>
          <SchoolTwoStyled
            variants={schoolTwoVar}
            initial='hidden'
            animate='show'
          >
            <SchoolDescriptionStyled>
              <h1>Udacity</h1>
              <h2>Front End Web Developer Nanodegree</h2>
            </SchoolDescriptionStyled>
            <ImageStyled src={Udacity} alt='Udacity' />
          </SchoolTwoStyled>
          <div></div>
        </SchoolsStyled>
      </AnimatePresence>
      <Navbar />
    </ContainerStyled>
  );
}
