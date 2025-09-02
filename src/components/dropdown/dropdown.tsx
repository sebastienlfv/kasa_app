import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.scss";

interface DropdownProps {
  title: string;
  description: string | string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-title" onClick={handleToggle}>
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron-icon${open ? " open" : ""}`}
        />
      </button>
      <div className={`dropdown-description${open ? " open" : ""}`}>
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          description
        )}
      </div>
    </div>
  );
};

export default Dropdown;
