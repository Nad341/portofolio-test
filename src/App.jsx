import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, PROJECTS, uniqueTags, filterByTag } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [activeTag, setActiveTag] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setIsDark(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const tagList = useMemo(() => ["Tous", ...uniqueTags(PROJECTS)], []);
  const filtered = useMemo(() => filterByTag(PROJECTS, activeTag), [activeTag]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selectedProject = useMemo(
    () => PROJECTS.find((p) => p.id === selected) || null,
    [selected]
  );

  return (
    <div>
      <div className="app-container">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="main-content">
            <Hero />
            <About />
            <Projects
              projects={filtered}
              tags={tagList}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              setSelected={setSelected}
            />
            <Contact />
          </main>
          <Footer />
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}