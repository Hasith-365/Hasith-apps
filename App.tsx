import React from 'react';
import AppLink from './components/AppLink';
import type { AppInfo } from './types';
import { BotIcon, BookOpenIcon, CursorIcon, ProjectorIcon, GithubIcon } from './components/icons';

const apps: AppInfo[] = [
  {
    name: "Hasith Chatbot",
    url: "https://hasith-chatbot.vercel.app",
    description: "An intelligent chatbot powered by advanced AI.",
    icon: <BotIcon className="w-8 h-8 text-white" />
  },
  {
    name: "Studybuddy",
    url: "https://hasith-studybuddy.vercel.app",
    description: "Your personal AI-powered study assistant.",
    icon: <BookOpenIcon className="w-8 h-8 text-white" />
  },
  {
    name: "Cursor",
    url: "https://hasith-cursor.vercel.app",
    description: "A course finding tool which uses AI to find courses from the web according to the user's prompt.",
    icon: <CursorIcon className="w-8 h-8 text-white" />
  },
  {
    name: "Projecter AI",
    url: "https://hasith-projecter.vercel.app",
    description: "Generate project ideas and plans with AI.",
    icon: <ProjectorIcon className="w-8 h-8 text-white" />
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4 font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <header className="text-center mb-12 z-10">
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Hasith's Web Apps
        </h1>
        <p className="text-lg text-gray-400">A collection of projects showcasing web development and AI integration.</p>
      </header>

      <main className="w-full max-w-4xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <AppLink key={app.name} {...app} />
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500 z-10">
        <p>Built with React & Tailwind CSS.</p>
        <a href="https://github.com/hasith-365" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-purple-400 transition-colors mt-2">
          <GithubIcon className="w-5 h-5" />
          <span>hasith-365 on GitHub</span>
        </a>
      </footer>
    </div>
  );
};

export default App;