import { useState, useEffect } from 'react';
import './App.css';
import Lottie from 'lottie-react';

function App() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Replace 'your-animation.json' with your actual filename
    fetch(`${process.env.PUBLIC_URL}/finalmobileversion.json`)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  return (
    <div className="App">
        
        {/* Lottie Animation - only render when data is loaded */}
        {animationData && (
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            speed={0.25}
            style={{ height: 200, width: 200, margin: '20px' }}
          />
        )}
        
        
    </div>
  );
}

export default App;