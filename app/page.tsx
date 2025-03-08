'use client';

import { navItems } from '@/data';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import dynamic from 'next/dynamic';

const GradientBg = dynamic(() => import("@/components/ui/GradientBg").then(mod => mod.default), {
  ssr: false,
});


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <GradientBg />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
