import { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import ProTheme from '../themes/pro-theme';
import FunTheme from '../themes/fun-theme';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  display: grid;
  justify-content: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-family: 'Merriweather', serif;
  font-weight: 300;
  overflow-x: hidden;
}
a{
  text-decoration: none;
  color: ${({ theme }) => theme.textTwo};
}
`;
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(ProTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(prev => (prev.id === 'pro' ? FunTheme : ProTheme));
        },
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
