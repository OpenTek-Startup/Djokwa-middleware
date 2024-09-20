import React from 'react';
import './studentcard.molecules.css';
import { IconRepository } from '../../../repository/icons/icon.repository';
type studentProps = {
  name: string;
  imgUrl: string;
  level: string;
};
function Student(props: studentProps) {
  return (
    <div className="card-container">
      <img className="pimg" src={props.imgUrl} alt="student.png" />
      <p>
        <b>{props.name}</b>
      </p>
      <p>{props.level}</p>
      <div className="iconContainer">
        <span className="icon">
          <IconRepository.MessageIcon />
        </span>
        <span className="icon">
          <IconRepository.CommentIcon />
        </span>
      </div>
    </div>
  );
}

export default Student;
