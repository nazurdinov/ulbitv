import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import LangProvider from "./lang/LangProvider";


render(<BrowserRouter>
        <ThemeProvider>
        <LangProvider>
          <App />
        </LangProvider>
        </ThemeProvider>
      </BrowserRouter>, 
document.getElementById('root'))