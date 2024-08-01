import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ResponsiveCard from '../components/ResponsiveCard';


const Hobbies = () => {
  return (
    <>
            <ResponsiveAppBar/>
            <main style={{ position: 'relative', zIndex: 1 }}>
            <ResponsiveCard/>
            </main>
        
    </>
  );
}

export default Hobbies;
