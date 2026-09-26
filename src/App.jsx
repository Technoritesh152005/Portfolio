import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./pages/Education";
import { MelodisDetail } from "./pages/MelodisDetail";
import { Blogs } from "./pages/Blogs";
import { MyStuff } from "./pages/MyStuff";

function App() {

  // Apply theme on app load
  useEffect(() => {
  const stored = localStorage.getItem("theme");

  if (!stored) {
    localStorage.setItem("theme", "dark"); // set default first time
  }

  document.documentElement.classList.add("dark");
}, []);
// runs only once

  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar stays always */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/melodis_detail" element={<MelodisDetail />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/education" element={<Education/>}  />
        <Route path="/my-stuff" element={<MyStuff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
