import { Suspense } from 'react';
import HomePage from './components/HomePage';
import NetflixRotatingLoader from './components/NetflixRotatingLoader';

export default function Home() {
  return (
    <Suspense fallback={<NetflixRotatingLoader 
        text={ "Loading..." }
        fullScreen={true}
      />}>
      
      <HomePage />
    </Suspense>
  );
}