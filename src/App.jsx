// src/App.jsx
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Members from "./components/Members";
import Contact from "./components/Contact";

const page = {
  initial:{opacity:0, y:12},
  animate:{opacity:1, y:0, transition:{duration:.35, ease:"easeOut"}},
  exit:{opacity:0, y:-8, transition:{duration:.25, ease:"easeIn"}}
};

export default function App(){
  const location = useLocation();
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      {/* Government ribbon */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-1">
              <img 
                src="/assets/logo1.png" 
                alt="State Emblem" 
                className="h-10 w-10 object-contain" 
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Government of India</h1>
              <p className="text-sm font-medium text-blue-100">Gram Panchayat Portal • Smart Village Initiative</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            <span className="rounded-full bg-white/10 px-3 py-1">Digital India</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Accessible</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Responsive</span>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3">
          <div className="font-bold text-lg">Smart Village Seva</div>
          <nav className="flex gap-4">
            {[
              {to:"/", label:"Home"},
              {to:"/gallery", label:"Gallery"},
              {to:"/news", label:"News"},
              {to:"/members", label:"Members"},
              {to:"/contact", label:"Contact"},
            ].map((l)=>(
              <NavLink key={l.to} to={l.to} end
                className={({isActive})=>
                  `px-2 py-1 text-sm rounded ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:text-blue-700"
                  }`
                }>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto hidden md:flex gap-3 text-sm">
            <a className="text-blue-700 underline underline-offset-4" href="#">Facebook</a>
            <a className="text-blue-700 underline underline-offset-4" href="#">Instagram</a>
            <a className="text-blue-700 underline underline-offset-4" href="#">X</a>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} variants={page} initial="initial" animate="animate" exit="exit">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="mt-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600">
          © 2025 Smart Village Seva • Built for compliance with GIGW/UX4G principles. [This design references public guidelines.] [1][8]
        </div>
      </footer>
    </div>
  );
}
