import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Timer from './Timer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(32,32,32)',
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
