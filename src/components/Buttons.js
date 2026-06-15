// src/components/Button.js
import React from 'react';
import colors from '../theme/colors';

const Button = ({ title, onClick, variant = 'primary', loading = false, disabled = false, style, ...props }) => {
  const isPrimary = variant === 'primary';

  // Base element styles
  const baseStyle = {
    height: '48px',
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    width: '100%',
    boxSizing: 'border-box',
    border: isPrimary ? 'none' : `1.5px solid ${colors.primary}`,
    backgroundColor: isPrimary ? colors.primary : 'transparent',
    color: isPrimary ? '#FFFFFF' : colors.primary,
    opacity: (disabled || loading) ? 0.6 : 1,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{ ...baseStyle, ...style }}
      {...props}
    >
      {loading ? (
        <span style={spinnerStyle}></span>
      ) : (
        title
      )}
    </button>
  );
};

// CSS inline structural keyframes simulation for standard loader
const spinnerStyle = {
  width: '20px',
  height: '20px',
  border: '2px solid rgba(255,255,255,0.3)',
  borderTop: '2px solid currentColor',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

export default Button;