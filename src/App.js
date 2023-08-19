import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scences/global/Topbar'
import { Route, Routes } from "react-router-dom";
import Dashboard from './scences/dashboard';
import Sidebar from "./scences/global/Sidebar";
import { useState } from 'react'
// import  Team from './scences/team';
// import  Invoice from './scences/Invoice';
// import Contacts from "./scences/contacts";
// import Bar from "./scences/bar";
// import Form from "./scences/form";
// import Line from "./scences/line";
// import Pie from "./scences/pie";
// import FAQ from "./scences/faq";
// import Geography from "./scences/geography"
// import Calendar from "./scences/Calendar"

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoice" element={<Invoice />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
