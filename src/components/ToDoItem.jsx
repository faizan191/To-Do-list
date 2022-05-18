import React, { useState, usestate } from "react";

function ToDoItem(props) {
  const [listItem, setListItem] = useState("props.text");
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
