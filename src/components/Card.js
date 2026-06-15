// src/components/Card.js
import React from 'react';
import colors from '../theme/colors';

const Card = ({ children, onClick, style, ...props }) => {
  const isClickable = !!onClick;

  const cardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '12px',
    padding: '20px',
    margin: '12px 0',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    cursor: isClickable ? 'pointer' : 'default',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    boxSizing: 'border-box',
  };

  // Render clickable container if interactive flow is required
  if (isClickable) {
    return (
      <div 
        onClick={onClick} 
        style={{ ...cardStyle, ...style }} 
        {...props}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = cardStyle.boxShadow;
        }}
      >
        {children}
      </div>
    );
  }

  return <div style={{ ...cardStyle, ...style }} {...props}>{children}</div>;
};

export default Card;