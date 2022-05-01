import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Profile from '../public/Marvel.png';

const ContainerStyled = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Merriweather', serif;
  text-align: center;
  color: ${({ theme }) => theme.textOne};
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 2.5em;
  grid-column: span 2;
  width: 100%;
`;
const TldrStyled = styled.div`
  width: 75%;
  display: grid;
  grid-column: span 2;
  grid-template-columns: 1fr 2fr;
`;
const PicContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.textOne};
  float: left;
`;
const InfoContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
`;
const SubheadStyled = styled.div`
  font-size: 2em;
  background-color: ${({ theme }) => theme.thirdColor};
  text-align: center;
  justify-items: center;
  /* > h2 {
    font-family: ExtraBold 800 Italic;
  } */
`;
const InfoStyled = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 1.5em;
  color: white;
  padding: 2% 20% 2% 20%;
`;
const InfoStyledTwo = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 1.5em;
  color: white;
  padding: 2% 15% 2% 15%;
`;
const ProfileImageStyled = styled(Image)`
  border-radius: 30%;
`;
const FullStoryStyled = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr;
  grid-column: span 2;
`;
export default function About() {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>About Me</h1>
      </HeaderStyled>
      <TldrStyled>
        <PicContainerStyled>
          <ProfileImageStyled src={Profile} alt='Profile' />
        </PicContainerStyled>
        <InfoContainerStyled>
          <SubheadStyled>
            <h2>TLDR:</h2>
          </SubheadStyled>
          <InfoStyled>
            <p>
              Web Developer with hands-on experience in developing a variety of
              websites by leveraging advanced skills in Frontend and Backend
              programming.
            </p>
          </InfoStyled>
        </InfoContainerStyled>
      </TldrStyled>
      <FullStoryStyled>
        <SubheadStyled>
          <h2>Full Story:</h2>
        </SubheadStyled>
        <InfoStyledTwo>
          <p>
            {`Hello Everyone! I'm Ed O’Connor, a meticulous and diligent
          professional with a proven track record of managing daily store
          operations while adhering to set company standards. Throughout my
          career, I have remained a resourceful and results-driven professional
          with a record of leading and building top-performing teams to boost
          operational effectiveness.`}
          </p>
          <p>
            {` 
          I have a remarkable background in managing,
          planning, and implementing tactical sales/marketing strategies to
          achieve ambitious sales goals. I'm capable of collaborating closely
          with senior web developers to plan and execute new web features.
          Expert in connecting web applications to backend server data using
          JavaScript language. 
          `}
          </p>
          <p>
            {`
          My soft skills are second to none. Connect with
          me today or send me an email at ejoc1103@gmail.com if you want to
          discuss additional details regarding my work experience and the skills
          I have to offer.`}
          </p>
        </InfoStyledTwo>
      </FullStoryStyled>
      <Navbar />
    </ContainerStyled>
  );
}
