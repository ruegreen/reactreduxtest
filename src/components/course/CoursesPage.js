import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
//import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseAction';
//import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title:"" }
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }
  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

/*
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }*/
//basically maps over the courses and reiterates the map index and prints each course out!
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h1>Add Course</h1>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input type="submit"
               value="save"
               className="btn btn-primary"
               onClick={this.onClickSave}/>

        {/* <CourseList courses={this.props.courses}/>*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses  //redux store state data, this state is the same as that named in the root reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)  //map all actions in course actions file to actions, referenced above
  };
}
//function calling a connect then takes the result and calls Courses Page
//Connect wraps the CoursesPage component with the connect high level component from redux
export default connect(mapStateToProps,mapDispatchToProps())(CoursesPage);

