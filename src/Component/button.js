import React from 'react';

function Button({ text, onClick, type, disabled }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}> {text} </button>
  );
}

export default Button;