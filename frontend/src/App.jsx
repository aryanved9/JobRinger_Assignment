import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Remotejob from "./components/Remotejob";
import Employers from "./components/Employers";
import Download from "./components/Download";
import Totaljob from "./components/Totaljob";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      </div>
     
     <div className="container mx-auto px-8"></div>
       <Navbar/>
       <Hero/>
       <Jobs/>
       <Remotejob/>
       <Employers/>
       <Download/>
       <Totaljob/>
       <Footer/>

    </div>
  );
}

export default App;
