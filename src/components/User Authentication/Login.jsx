/* eslint-disable no-unused-vars */
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { Circles } from "react-loader-spinner";

// Simulating an async login function (you can replace this with an actual API call)
const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 2000); // Simulate a 2-second delay
  });
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogin = (username, password) => {
    setLoading(true);
    setError(null); // Reset error state on every new login attempt
    setSuccessMessage(null); // Reset success message on every new login attempt

    login(username, password)
      .then((message) => {
        setSuccessMessage(message); // Show success message
        setLoading(false);
      })
      .catch((err) => {
        setError("Login failed");
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    handleLogin(username, password);
  };

  return (
    <LoadingOverlay active={loading} spinner={<Circles />} text="Logging in...">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>} {/* Display success message */}
      </form>
    </LoadingOverlay>
  );
};

export default LoginPage;
