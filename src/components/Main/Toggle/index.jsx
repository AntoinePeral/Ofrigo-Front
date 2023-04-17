import React, { useState } from 'react';

const Toggle = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle} className={`toggle-btn ${isToggled ? 'active' : ''}`}>
      {isToggled ? 'On' : 'Off'}
    </button>
  );
};

export default Toggle;