import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-2 relative overflow-hidden">
      <div className="w-full max-w-lg px-2 lg:px-0">{children}</div>
    </div>
  );
};
