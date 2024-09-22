import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';
import Toggle from '../components/Toggle';
import Profile from '../public/MainProfile.jpeg';
import LinkedIn from '../public/LinkedIn.png';
import Github from '../public/github.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  #welcome-block {
    align-content: start;
    border: 1.5em solid ${({ theme }) => theme.thirdColor};
    text-align: center;
  }
`

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-areas:
    'main edu edu proj'
    'main about tog proj'
    'main about con con';
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'edu proj'
      'main main'
      'about con';
      'hob hob';
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'main'
      'proj'
      'about'
      'con'
      'edu';
      'hob';
  }
  
`;

const MainStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-area: main;
  font-family: 'Merriweather Sans', sans-serif, ExtraBold 800 Italic;
  color: ${({ theme }) => theme.headerText};
  @media (max-width: 800px) {
    background-color: ${({ theme }) => theme.primaryColor};
  }
  `;

const HeaderStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  color: white;
  border: 5px solid ${({ theme }) => theme.primaryColor};
`;

const HeaderColumnStyled = styled.div`
  display: grid;
  justify-items: center;
  align-content: start;
`
const ImageContainer = styled.div`
  display: grid;
  align-content: space-between;
`;

const ImageStyled = styled(Image)`
  height: 2rem;
  width: 2rem;
`;

const MainImageStyled = styled(Image)`

`;

const ContactLinks = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primaryColor};
`

const Edu = styled(motion.a)`
  display: flex;
  border: 1.5em solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: edu;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather', serif;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};
  `;

const Proj = styled(motion.a)`
  display: flex;
  border: 1.5em solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: proj;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather', serif;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};
  `;

const About = styled(motion.a)`
  display: flex;
  border: 1.5em solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textThree};
  grid-area: about;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather', serif;

  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textThree};
  cursor: pointer;

  @media (max-width: 800px) {
    border: 1.5em solid ${({ theme }) => theme.primaryColor};
  }
  `;

const Con = styled(motion.a)`
  display: flex;
  border: 1.5em solid ${({ theme }) => theme.primaryColor};
  grid-area: con;
  justify-content: center;
  align-items: center;

  font-family: 'Merriweather', serif;
  background-color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textThree};

  @media (max-width: 800px) {
    border: 1.5em solid ${({ theme }) => theme.thirdColor};
  }
  `;

const InfoStyled = styled.div`
  display: grid;
  justify-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 10px;
  font-size: .85em;
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

  const togVar = {
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
      <GlobalStyle />
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
          >
            <HeaderColumnStyled>

              <h2>
                {`Ed O'Connor`}
              </h2>


              <MainImageStyled

                src={Profile}
                alt='Profile'

              />

            </HeaderColumnStyled>
            <ContactLinks>
              <ImageContainer>
                <a
                  href="https://github.com/ejoc1103"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageStyled src={Github} alt="Github" />
                </a>
              </ImageContainer>
              <ImageContainer>
                <a
                  href="https://www.linkedin.com/in/edjoconnor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageStyled src={LinkedIn} alt="LinkedIn" />
                </a>
              </ImageContainer>
            </ContactLinks>

          </HeaderStyled>
          <InfoStyled id="welcome-block">
            <h2>Full Stack Developer | Problem Solver | Team Builder</h2>
            <h2>Father | Husband | Beach Bum</h2>
            <h3>
              Web Developer with hands-on experience in developing a variety of
              websites by leveraging advanced skills in Frontend and Backend
              programming.
            </h3>
            <h1>Skills</h1>
            <h3>
              Java | PostgreSQL | JSON | Spring Boot | Restful APIs | JavaScript | HTML & CSS | Vue.js | Unit Testing (JUnit) | Git |
              IntelliJ & VSCode | SQL | E/R diagrams | Agile | Responsive Web Design | React.js | NextJs | GraphQl | Python |
              Bootstrap | MongoDB | JDBC | Integration Testing
            </h3>
          </InfoStyled>

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

        <Toggle key='tog'
          variants={togVar}
          whileHover='hover'
          initial='hidden'
          animate='show'
          isActive={id === 'fun'} onToggle={setTheme} />


      </Container>
    </>
  );
}
