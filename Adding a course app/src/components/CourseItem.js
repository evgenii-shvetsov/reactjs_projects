import React from "react";

function CourseItem(props) {
  const completeStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.5,
    textDecoration: "line-through",
  };
  return (
    <li className="course-item">
      <input
        type="checkbox"
        checked={props.course.completed}
        onChange={() => props.handleChangeProps(props.course.id)}
      />

      <span style={props.course.completed ? completeStyle : null}>
        {props.course.title}
      </span>

      <button onClick={() => props.deleteCourseProps(props.course.id)}>
        X
      </button>

    </li>
  );
}

export default CourseItem;
