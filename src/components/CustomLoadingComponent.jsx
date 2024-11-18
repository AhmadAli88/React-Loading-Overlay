import { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Circles } from 'react-loader-spinner'; // Import custom spinner

const CustomLoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000); // Simulate a loading process

  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner={
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Circles color='#00BFFF' height={80} width={80} />
          </div>
        }
        text='Please wait while we fetch your data.'
      >
        <div>
          <h1>Content to Display</h1>
        </div>
      </LoadingOverlay>
    </div>
  );
};

export default CustomLoadingComponent;
