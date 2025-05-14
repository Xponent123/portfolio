import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

// Determine if we're running in production (GitHub Pages)
const isProduction = import.meta.env.MODE === 'production';
const basename = isProduction ? '/portfolio' : '/';

const App = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <main className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-300/20 text-black'} min-h-screen transition-colors duration-300 pt-16`}>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
