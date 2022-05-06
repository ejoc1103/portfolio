import styled from 'styled-components';
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
  gap: 5px;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textOne};
  padding-bottom: 50px;
`;

const SchoolsStyled = styled.div`
  display: grid;
  height: 100%;
  width: 80%;
  gap: 5px;
  grid-column: span 2;
  grid-template-columns: 1fr;
  align-content: space-evenly;
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

const SchoolOneStyled = styled.div`
  display: grid;
  height: 250px;
  grid-template-columns: 2fr 3fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  > div {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const SchoolTwoStyled = styled.div`
  display: grid;
  height: 250px;
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
  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>Education</h1>
      </HeaderStyled>
      <SchoolsStyled>
        <div></div>
        <SchoolOneStyled>
          <ImageStyled src={Rutgers} alt='Rutgers' />
          <SchoolDescriptionStyled>
            <h1>Rutgers Coding Bootcamp</h1>
            <h2>Full Stack Web Development</h2>
          </SchoolDescriptionStyled>
        </SchoolOneStyled>
        <div></div>
        <SchoolTwoStyled>
          <SchoolDescriptionStyled>
            <h1>Udacity</h1>
            <h2>Front End Web Developer Nanodegree</h2>
          </SchoolDescriptionStyled>
          <ImageStyled src={Udacity} alt='Udacity' />
        </SchoolTwoStyled>
        <div></div>
      </SchoolsStyled>
      <Navbar />
    </ContainerStyled>
  );
}
