// src/components/Input.js
import React from 'react';
import colors from '../theme/colors';

const Input = ({ label, value, onChange, placeholder, type = 'text', error, style, ...props }) => {
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '12px 0',
    width: '100%',
    fontFamily: 'sans-serif'
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: colors.text,
    marginBottom: '6px',
    textAlign: 'left'
  };

  const inputStyle = {
    height: '44px',
    backgroundColor: colors.surface,
    border: `1px solid ${error ? colors.error : colors.border}`,
    borderRadius: '8px',
    padding: '0 14px',
    fontSize: '16px',
    color: colors.text,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const errorStyle = {
    fontSize: '12px',
    color: colors.error,
    marginTop: '4px',
    textAlign: 'left'
  };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ ...inputStyle, ...style }}
        onFocus={(e) => {
          if (!error) e.target.style.borderColor = colors.primary;
        }}
        onBlur={(e) => {
          if (!error) e.target.style.borderColor = colors.border;
        }}
        {...props}
      />
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
};

export default Input;