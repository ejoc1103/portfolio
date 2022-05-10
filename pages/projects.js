import styled from 'styled-components';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Marvel from '../public/Marvel.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SightGame from '../public/SightGame.png';
import GetItDone from '../public/GetItDone.png';
import Wedding from '../public/Wedding.png';
const ContainerStyled = styled.div`
  grid-template-rows: auto 4fr;
  display: grid;
  text-align: center;
  gap: 15px;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textOne};
  justify-items: center;
  padding-bottom: 90px;
`;

const MainProjectsStyled = styled(motion.div)`
  display: grid;
  width: 60%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px;
  grid-column: span 2;
  grid-template-columns: 1fr;
  padding-top: 40px;
`;
const HeaderStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  grid-column: span 2;
  font-size: 2.5em;
`;

const ProjectBlockStyled = styled(motion.div)`
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
const ProjectDescriptionStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-area: desc;
  border: 12px solid ${({ theme }) => theme.textOne};
  color: ${({ theme }) => theme.textOne};
`;

const ImageDivStyled = styled.div`
  display: grid;
  grid-area: img;
  height: 100%;
  width: 100%;
`;
const ImageStyled = styled(Image)`
  height: 100%;
  width: 100%;
`;
const ALeftStyled = styled.a`
  display: grid;
  grid-template-areas: 'img img img desc desc desc';
  height: 100%;
  width: 100%;
  @media (max-width: 980px) {
    grid-template-areas: 'img' 'desc';
  }
`;
const ARightStyled = styled.a`
  display: grid;
  grid-template-areas: 'desc desc desc img img img';
  height: 100%;
  width: 100%;
  @media (max-width: 980px) {
    grid-template-areas: 'img' 'desc';
  }
`;
export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.6,
      },
    },
  };

  const headerVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const projectRight = {
    hidden: { x: -2000 },
    show: { x: 0 },
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  };
  const projectLeft = {
    hidden: { x: 2000 },
    show: { x: 0 },
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  };
  return (
    <ContainerStyled>
      <HeaderStyled>
        <motion.h1 variants={headerVar} initial='hidden' animate='show'>
          Projects
        </motion.h1>
      </HeaderStyled>
      <AnimatePresence>
        <MainProjectsStyled
          variants={container}
          initial='hidden'
          animate='show'
        >
          <ProjectBlockStyled variants={projectLeft}>
            <ALeftStyled
              href='https://marvel-catalog-viewer.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <ImageDivStyled>
                <ImageStyled src={Marvel} alt='Marvel' />
              </ImageDivStyled>
              <ProjectDescriptionStyled>
                <h1>Marvel Catalog Viewer</h1>
                <h2>
                  React Project that uses the Marvel Api to pull information on
                  Characters, Comics, Writers and more.
                </h2>
              </ProjectDescriptionStyled>
            </ALeftStyled>
          </ProjectBlockStyled>
          <ProjectBlockStyled variants={projectRight}>
            <ARightStyled
              href='https://get-it-done1234.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <ProjectDescriptionStyled>
                <h1>Get It Done</h1>
                <h2>
                  A Productvity helping app that will allow you to make several
                  different types of to-do lists as well as a day planner. Build
                  with React
                </h2>
              </ProjectDescriptionStyled>
              <ImageDivStyled>
                <ImageStyled src={GetItDone} alt='Get It Done' />
              </ImageDivStyled>
            </ARightStyled>
          </ProjectBlockStyled>
          <ProjectBlockStyled variants={projectLeft}>
            <ALeftStyled
              href='https://sight-words-game.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <ImageDivStyled>
                <ImageStyled src={SightGame} alt='Sight Words Game' />
              </ImageDivStyled>
              <ProjectDescriptionStyled>
                <h1>Sight Word Game</h1>
                <h2>
                  A fun little Bluey themed game I built for my daughter to
                  practice her sight words. Built with React.
                </h2>
              </ProjectDescriptionStyled>
            </ALeftStyled>
          </ProjectBlockStyled>
          <ProjectBlockStyled variants={projectRight}>
            <ARightStyled
              href='https://www.shelly-ed-2023.com/'
              target='_blank'
              rel='noreferrer'
            >
              <ProjectDescriptionStyled>
                <h1>Wedding Site</h1>
                <h2>
                  A site I built for my upcoming wedding. Built with React.
                </h2>
              </ProjectDescriptionStyled>
              <ImageDivStyled>
                <ImageStyled
                  src={Wedding}
                  alt='Wedding Site'
                  layout='responsive'
                />
              </ImageDivStyled>
            </ARightStyled>
          </ProjectBlockStyled>
        </MainProjectsStyled>
      </AnimatePresence>
      {/* TODO add in other projects and put them here */}
      {/* <div>
        <h2>Some Other Projects</h2>
        <Carousel>
          <div>
            <p className='legend'>Image 1</p>
            <Image src={Marvel} alt='Marvel' />
          </div>
          <div>
            <p className='legend'>Image 2</p>
            <Image src={SightGame} alt='image2' />
          </div>
          <div>
            <p className='legend'>Image 3</p>
            <Image src={GetItDone} alt='image3' />
          </div>
          <div>
            <p className='legend'>Image 4</p>
            <Image src={Wedding} alt='image4' />
          </div>
          <div>
            <p className='legend'>Image 5</p>
            <Image src={SightGame} alt='image5' />
          </div>
        </Carousel>
      </div> */}
      <Navbar />
    </ContainerStyled>
  );
}
