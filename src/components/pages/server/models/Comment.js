import React from "react";

const Comment = ({ name, text }) => {
  return (
    <li>
      <strong>{name}:</strong> {text}
    </li>
  );
};

export default Comment;
