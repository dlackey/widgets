import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Timer from './Timer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Timer />
    </ThemeProvider>
  );
}

export default App;
