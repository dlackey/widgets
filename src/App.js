import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Timer from './Timer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(25,25,25)',
    },
    text: {
      primary: 'rgb(211,211,211)',
    },
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
