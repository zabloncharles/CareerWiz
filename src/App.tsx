import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import { ResumeLayout } from './modules/builder/resume/ResumeLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ResumeLayout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App; 