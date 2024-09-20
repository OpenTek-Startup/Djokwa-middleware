import React from 'react';
import Student from './Student-card-declaration.molecules';
import { studentInfo } from '../../../constants/demoData';
import './studentcard.molecules.css';
type studentProps = {
  name: string;
  img: string;
  level: string;
};
function createStudent(student: studentProps) {
  return (
    <Student
      key={`${student.name}-${student.level}`}
      imgUrl={student.img}
      name={student.name}
      level={student.level}
    />
  );
}
function StudentCard() {
  return <div className="mainContainer">{studentInfo.map(createStudent)}</div>;
}
export default StudentCard;
