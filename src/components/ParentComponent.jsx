import { useState } from 'react';
import PropTypes from 'prop-types';  // Import prop-types for validation
import LoadingOverlay from 'react-loading-overlay';

// Overlay component with prop types
const Overlay = ({ loading, children }) => (
  <LoadingOverlay active={loading} spinner text="Loading...">
    {children}
  </LoadingOverlay>
);

Overlay.propTypes = {
  loading: PropTypes.bool.isRequired,  // Ensure loading is a boolean and is required
  children: PropTypes.node.isRequired, // Ensure children is a valid React node and is required
};

// Parent component with prop types
const ParentComponent = () => {
  const [loading, setLoading] = useState(true);

  // Simulating loading for 4 seconds
  setTimeout(() => setLoading(false), 4000);

  return (
    <Overlay loading={loading}>
      <div>
        <h1>Important Data</h1>
        <p>This is your important content, shown after the overlay is removed.</p>
      </div>
    </Overlay>
  );
};

export default ParentComponent;
