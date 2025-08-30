import { useState } from 'react';

import Login from '@/components/Login';
import { SplashScreen } from '@/components/SplashScreen';
import { Layout } from '@/elements/layout';

export const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  /** splash screen 완료 시 호출 */
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    // This div will be the full-width wrapper inside the centered body.
    <Layout>
      <div className="flex items-center justify-center">
        <Login />
      </div>
    </Layout>
  );
};
