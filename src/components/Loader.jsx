import React from 'react';

const Loader = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <span style={{
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '5px solid #eee',
      borderTop: '5px solid #2e3a59',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></span>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
    <p style={{color:'#2e3a59'}}>Cargando productos...</p>
  </div>
);

export default Loader;