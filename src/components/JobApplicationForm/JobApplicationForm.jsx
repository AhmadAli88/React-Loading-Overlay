import { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Circles } from 'react-loader-spinner';

// Simulated submit function (replace with your API call logic)
const submitApplication = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.name && formData.email && formData.resume) {
        resolve('Application submitted successfully!');
      } else {
        reject('All fields are required!');
      }
    }, 2000);
  });
};

const JobApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message before submission

    try {
      await submitApplication(formData);
      setSuccessMessage('Your application has been submitted successfully!');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Circles />
          </div>
        }
        text='Submitting your application...'
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Name</label>
            <input
              type='text'
              placeholder='Your Name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label>Upload Resume</label>
            <input
              type='file'
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.files[0] })
              }
              required
            />
          </div>

          <button type='submit'>Submit</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
      </LoadingOverlay>
    </div>
  );
};

export default JobApplicationForm;
