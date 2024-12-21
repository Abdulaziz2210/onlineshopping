import React from 'react';
import ErrorImage from '../../components/404 error/error.jpg'; // Adjust the path if needed

const Error = () => {
  // Inline styles
  const styles = {
    container: {
      position: 'fixed', // Make it fixed to cover the entire viewport
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${ErrorImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      zIndex: 9999, // Ensure it is on top of other elements
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    heading: {
      marginTop: '20px',
      fontSize: '2rem',
    },
    paragraph: {
      marginTop: '10px',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <h1 style={styles.heading}>Page Not Found</h1>
      <p style={styles.paragraph}>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default Error;