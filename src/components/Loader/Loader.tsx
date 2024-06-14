import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="animate-pulse space-y-2">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-5/6 rounded bg-gray-300"></div>
      </div>
      <div className="animate-pulse space-y-2">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-5/6 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};
