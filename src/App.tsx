import React from 'react';
import Footer from './components/layout/Footer';
import Hero from './section/Hero';
import Skills from './section/Skills';
import Experience from './section/Experience';
import Projects from './section/Projects';
import Achievements from './section/Achievements';
import Contacts from './section/Contacts';

/**
 * Main App Component
 * 
 * This is the main application component that assembles all sections.
 * The structure is set up for easy integration of your custom components.
 * 
 * To integrate your code:
 * 1. Replace each section component with your actual implementation
 * 2. Update the Navigation and Footer components with your designs
 * 3. Add any additional global effects or providers as needed
 */

function App() {
  return (
    <div className="App">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;