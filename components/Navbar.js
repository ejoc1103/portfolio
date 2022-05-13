import React, { useContext } from 'react';
import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';
import Toggle from '../components/Toggle';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column: span 2;
  gap: 5px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NavSection = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.thirdColor};
  border: 5px solid ${({ theme }) => theme.primaryColor};
  font-size: 1.5em;
  justify-content: center;
  align-content: center;
`;
const NavA = styled.a`
  color: ${({ theme }) => theme.textOne};
  font-weight: 800;
  font-size: 1.1em;
`;
const ToggleSection = styled.div`
  display: grid;
  font-size: 1.5em;
  justify-content: center;
  align-content: center;
`;

export default function Navbar() {
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <Container>
      <NavSection>
        <Link href='/about' passHref>
          <NavA>About</NavA>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/projects' passHref>
          <NavA>Projects</NavA>
        </Link>
      </NavSection>
      <ToggleSection>
        <Toggle isActive={id === 'fun'} onToggle={setTheme} />
      </ToggleSection>
      <NavSection>
        <Link href='/' passHref>
          <NavA>Home</NavA>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/education' passHref>
          <NavA>Education</NavA>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/contact' passHref>
          <NavA>Contact</NavA>
        </Link>
      </NavSection>
    </Container>
  );
}
