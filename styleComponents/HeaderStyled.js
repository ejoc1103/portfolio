import styled from 'styled-components';

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

export { HeaderStyled };
