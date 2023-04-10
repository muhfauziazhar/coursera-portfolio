import * as React from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <header>
        <Profile />
      </header>
      <main>
        <Projects />
        <ContactMe />
      </main>
      <footer className="bg-sky-200 py-6">
        <p className="text-center">© Made with 🔥️ by Zee.</p>
      </footer>
    </div>
  );
}

export default App;
