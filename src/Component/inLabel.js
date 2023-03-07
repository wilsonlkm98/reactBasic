import React from 'react';

function InLabel({ type, value, onChange, placeholder }) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
}

export default InLabel;