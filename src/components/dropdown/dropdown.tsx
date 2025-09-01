import React, { useState } from "react";
import "./dropdown.scss";

interface DropdownProps {
  title: string;
  description: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-title" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && <div className="dropdown-description">{description}</div>}
    </div>
  );
};

export default Dropdown;
