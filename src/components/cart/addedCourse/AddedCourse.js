import React from 'react';

const AddedCourse = (props) => {
    console.log(props);
    return (
       
        <div>
            <p><b>{props.name}</b></p>
            <p>{props.price}</p>
        </div>
    );
};

export default AddedCourse;