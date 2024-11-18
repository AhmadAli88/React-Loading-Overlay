import  { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 5000); // Simulate a loading process

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text='Loading...'
    >
      <div>
        <h1>Your Content Here</h1>
        <p>This content is under overlay during loading.</p>
      </div>
    </LoadingOverlay>
  );
};

export default LoadingComponent;
