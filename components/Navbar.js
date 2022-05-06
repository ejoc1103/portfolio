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
`;

const NavSection = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.textOne};
  border: 5px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textTwo};
  font-size: 1.5em;
  justify-content: center;
  align-content: center;
`;

export default function Navbar() {
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <Container>
      <NavSection>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/'>
          <a>{`Ed O'Connor`}</a>
        </Link>
      </NavSection>
      <NavSection>
        <div>
          <Toggle isActive={id === 'fun'} onToggle={setTheme} />
        </div>
      </NavSection>
      <NavSection>
        <Link href='/education'>
          <a>Education</a>
        </Link>
      </NavSection>
      <NavSection>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </NavSection>
    </Container>
  );
}
