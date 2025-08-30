import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 relative overflow-hidden">
      <div className="w-full px-2 lg:px-0 max-w-5xl">{children}</div>
    </div>
  );
};
