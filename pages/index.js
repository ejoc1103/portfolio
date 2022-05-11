import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Toggle from '../components/Toggle';

const Container = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'edu edu proj'
    'about main proj'
    'about con con';
  @media (max-width: 1050px) {
    grid-template-areas:
      'edu proj'
      'main main'
      'about con';
  }
  @media (max-width: 800px) {
    position: relative;
    grid-template-areas:
      'main'
      'proj'
      'about'
      'con'
      'edu';
  }
`;

const MainStyled = styled(motion.div)`
  display: grid;
  font-weight: bold;
  grid-area: main;
  font-family: 'Merriweather Sans', sans-serif, ExtraBold 800 Italic;
  justify-content: center;
  align-content: center;
  font-size: 3em;
  color: ${({ theme }) => theme.headerText};
  @media (max-width: 1150px) {
    font-size: 2.5em;
  }
  @media (max-width: 800px) {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

const ToggleDivStyled = styled.div`
  margin-bottom: 20px;
`;

const HeaderStyled = styled(motion.h1)`
  text-align: center;
`;

const Edu = styled(motion.a)`
  display: grid;
  border: 1.5em solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: edu;
  justify-content: center;
  align-content: center;
  font-family: 'Merriweather', serif;
  font-size: 3em;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};
  @media (max-width: 1150px) {
    font-size: 2.5em;
  }
`;

const Proj = styled(motion.a)`
  display: grid;
  border: 1.5em solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: proj;
  justify-content: center;
  align-content: center;
  font-family: 'Merriweather', serif;
  font-size: 3em;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};
  @media (max-width: 1150px) {
    font-size: 2.5em;
  }
`;

const About = styled(motion.a)`
  display: grid;
  border: 1.5em solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: about;
  justify-content: center;
  align-content: center;
  font-family: 'Merriweather', serif;
  font-size: 3em;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textThree};
  cursor: pointer;
  @media (max-width: 1150px) {
    font-size: 2.5em;
  }
  @media (max-width: 800px) {
    border: 1.5em solid ${({ theme }) => theme.primaryColor};
  }
`;

const Con = styled(motion.a)`
  display: grid;
  border: 1.5em solid ${({ theme }) => theme.primaryColor};
  font-size: 3em;
  grid-area: con;
  justify-content: center;
  align-content: center;
  font-family: 'Merriweather', serif;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};
  @media (max-width: 1150px) {
    font-size: 2.5em;
  }
  @media (max-width: 800px) {
    border: 1.5em solid ${({ theme }) => theme.thirdColor};
  }
`;

export default function Home() {
  const { id, setTheme } = useContext(ThemeContext);
  //Motion variant to fade into my name on page
  const mainVar = {
    start: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 4,
        delayChildren: 4,
      },
    },
  };
  //motion variants to make my name scale and return to normal size after fading in
  const mainWordsVar = {
    start: {
      scale: 1,
    },
    show: {
      scale: [1, 2, 1],
      transition: {
        delay: 5,
        duration: 2,
      },
    },
  };
  // motion variant to slide in edu header from left and grow on hover
  const eduVar = {
    hidden: {
      x: -2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.3,
    },
  };
  // motion variant to slide in about header from left
  const aboutVar = {
    hidden: {
      y: -2000,
    },
    show: {
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
    hover: {
      scale: 1.3,
    },
  };
  // motion variant to slide in proj header from left
  const projVar = {
    hidden: {
      x: -2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 2,
        delay: 1.5,
      },
    },
    hover: {
      scale: 1.3,
    },
  };
  // motion variant to slide in connect header from left
  const conVar = {
    hidden: {
      x: -2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
    hover: {
      scale: 1.3,
    },
  };
  return (
    <>
      <Container>
        <Head>
          <title>{`Ed's Portfolio`}</title>
          <meta name='description' content='Generated by create next app' />
        </Head>

        <MainStyled
          key='main'
          variants={mainVar}
          initial='start'
          animate='show'
        >
          <HeaderStyled
            key='mainWords'
            variants={mainWordsVar}
            initial='start'
            animate='show'
          >{`Ed O'Connor`}</HeaderStyled>
          <ToggleDivStyled>
            <Toggle isActive={id === 'fun'} onToggle={setTheme} />
          </ToggleDivStyled>
        </MainStyled>

        <Link href='/education' passHref>
          <Edu
            key='edu'
            variants={eduVar}
            whileHover='hover'
            initial='hidden'
            animate='show'
          >
            <h2>{`Education`}</h2>
          </Edu>
        </Link>
        <Link href='/projects' passHref>
          <Proj key='projDiv' variants={projVar} whileHover='hover'>
            <motion.h2
              key='proj'
              variants={projVar}
              initial='hidden'
              animate='show'
            >{`Projects`}</motion.h2>
          </Proj>
        </Link>
        <Link href='/about' passHref>
          <About key='aboutDiv' variants={aboutVar} whileHover='hover'>
            <motion.h2
              key='about'
              variants={aboutVar}
              initial='hidden'
              animate='show'
            >{`About`}</motion.h2>
          </About>
        </Link>
        <Link href='/contact' passHref>
          <Con
            key='con'
            variants={conVar}
            whileHover='hover'
            initial='hidden'
            animate='show'
          >
            <h2>{`Contact`}</h2>
          </Con>
        </Link>
      </Container>
    </>
  );
}
