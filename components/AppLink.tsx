import React from 'react';
import type { AppInfo } from '../types';
import { ExternalLinkIcon } from './icons';

const AppLink: React.FC<AppInfo> = ({ name, url, description, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-700/50 rounded-lg">
            {icon}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
              {name}
            </h2>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          </div>
        </div>
        <ExternalLinkIcon className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
      </div>
    </a>
  );
};

export default AppLink;