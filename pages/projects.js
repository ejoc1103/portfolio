import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Marvel from '../public/Marvel.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SightGame from '../public/SightGame.png';
import GetItDone from '../public/GetItDone.png';
import Wedding from '../public/Wedding.png';
const ContainerStyled = styled.div`
  position: relative;
  grid-template-rows: auto 4fr;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  text-align: center;
  gap: 15px;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textOne};
  justify-items: center;
`;

const MainProjectsStyled = styled.div`
  display: grid;
  height: 100%;
  width: 60%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px;
  grid-column: span 2;
  grid-template-columns: 1fr;
  align-content: space-evenly;
`;
const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  grid-column: span 2;
  font-size: 2.5em;
`;

const ProjectLeftStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const ProjectRightStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
const LastMainProjectStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  margin-bottom: 2rem;
`;
const SchoolDescriptionStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border: 12px solid ${({ theme }) => theme.textOne};
  color: ${({ theme }) => theme.textOne};
`;
const ImageStyled = styled(Image)`
  border: 12px solid ${({ theme }) => theme.TextOne};
`;
export default function Education() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>Projects</h1>
      </HeaderStyled>
      <MainProjectsStyled>
        <a
          href='https://marvel-catalog-viewer.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          {/* <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence> */}
          <ProjectLeftStyled>
            <ImageStyled src={Marvel} alt='Marvel' />
            <SchoolDescriptionStyled>
              <h1>Rutgers Coding Bootcamp</h1>
              <h2>Full Stack Web Development</h2>
            </SchoolDescriptionStyled>
          </ProjectLeftStyled>
        </a>
        <a
          href='https://sight-words-game.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <ProjectRightStyled>
            <SchoolDescriptionStyled>
              <h1>Udacity</h1>
              <h2>Front End Web Developer Nanodegree</h2>
            </SchoolDescriptionStyled>
            <ImageStyled src={SightGame} alt='Sight Words Game' />
          </ProjectRightStyled>
        </a>
        <a
          href='https://get-it-done1234.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <ProjectLeftStyled>
            <ImageStyled src={GetItDone} alt='Get It Done' />
            <SchoolDescriptionStyled>
              <h1>Rutgers Coding Bootcamp</h1>
              <h2>Full Stack Web Development</h2>
            </SchoolDescriptionStyled>
          </ProjectLeftStyled>
        </a>
        <a
          href='https://www.shelly-ed-2023.com/'
          target='_blank'
          rel='noreferrer'
        >
          <LastMainProjectStyled>
            <SchoolDescriptionStyled>
              <h1>Udacity</h1>
              <h2>Front End Web Developer Nanodegree</h2>
            </SchoolDescriptionStyled>
            <ImageStyled src={Wedding} alt='Wedding Site' />
          </LastMainProjectStyled>
        </a>
      </MainProjectsStyled>
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
