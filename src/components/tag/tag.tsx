import React from "react";
import "./tag.scss";

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="tag">{children}</span>
);

export default Tag;
