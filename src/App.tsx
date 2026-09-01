import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
     <ScrollToTop />
      <ScrollTopButton />
      <div className="min-h-screen bg-[#f5f3ee] text-[#171a17] transition-colors duration-300 dark:bg-[#171a17] dark:text-[#f5f3ee]">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/work/:slug"
              element={<ProjectDetails />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;