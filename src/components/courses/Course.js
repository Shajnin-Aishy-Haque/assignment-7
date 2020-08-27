import React from 'react';
import './Course.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const { name, instructor, type, price } = props.course;
    console.log(props.course);
    return (
        <div className="course">
            <h3 className="course-name">{name}</h3>
            <br />
            <p><b> by:{instructor}</b></p>
            <br />
            <p>${price}</p>
            <button className="type  btn btn-warning"><small>{type}</small></button>
            <br/>
            <button onClick={() => props.handleEnrollButton(props.course)} className="add-button"> Enroll Now</button>
        </div>
    );
};

export default Course;