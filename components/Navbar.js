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
  padding: 5px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NavSection = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.thirdColor};
  border: 5px solid ${({ theme }) => theme.primaryColor};
  justify-content: center;
  align-content: center;
`;
const NavH1 = styled.h1`
  color: ${({ theme }) => theme.textOne};
  font-weight: 800;
  font-size: 1.1em;
`;
const ToggleSection = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

export default function Navbar() {
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Link href='/about' passHref>
        <a>
          <NavSection>
            <NavH1>About</NavH1>
          </NavSection>
        </a>
      </Link>
      <Link href='/projects' passHref>
        <a>
          <NavSection>
            <NavH1>Projects</NavH1>
          </NavSection>
        </a>
      </Link>
      <ToggleSection>
        <Toggle isActive={id === 'fun'} onToggle={setTheme} />
      </ToggleSection>
      <Link href='/' passHref>
        <a>
          <NavSection>
            <NavH1>Home</NavH1>
          </NavSection>
        </a>
      </Link>
      <Link href='/education' passHref>
        <a>
          <NavSection>
            <NavH1>Education</NavH1>
          </NavSection>
        </a>
      </Link>
      <Link href='/contact' passHref>
        <a>
          <NavSection>
            <NavH1>Contact</NavH1>
          </NavSection>
        </a>
      </Link>
    </Container>
  );
}
