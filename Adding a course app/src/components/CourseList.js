import React from "react";
import CourseItem from "./CourseItem";

class CourseList extends React.Component {
  render() {
    return (
      <div className="courseList">
        {this.props.courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            handleChangeProps={this.props.handleChangeProps}
            deleteCourseProps={this.props.deleteCourseProps}
          />
        ))}
      </div>
    );
  }
}
export default CourseList;
