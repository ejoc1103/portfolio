import { useState } from 'react';
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
  min-height: 400px;
  margin-bottom: 100px;
  clear: both;
  background-color: ${({ theme }) => theme.secondaryColor}
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
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
