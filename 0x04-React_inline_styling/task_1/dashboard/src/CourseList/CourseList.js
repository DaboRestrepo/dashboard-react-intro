import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

export default function CourseList({listCourses}) {
  return (
    <>
    <table id='CourseList' className={css(styles.list)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        { listCourses.length === 0 ? (<CourseListRow isHeader={false} textFirstCell='No course available yet' />) : <></> }
        { listCourses.map((course) => (<CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />)) }
      </tbody>
    </table>
    </>
  );
}

const styles = StyleSheet.create ({
  list: {
    margin: 40,
    border: '1px solid grey',
    borderCollapse: 'collapse',
    width: '95%',
  },
});

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};
