import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [ theme, colorMode ] = useMode();

  return (
    <ColorModeContext.Provider value={color}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          
        </div>
      </ThemeProvider> 
    </ColorModeContext.Provider>
  );
}

export default App
