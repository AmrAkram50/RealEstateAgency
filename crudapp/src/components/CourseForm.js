import React from "react";

const CourseForm = (props) => {
    return(
        <div>
            <form id='Form' onSubmit={props.addCourse}>
                <input type='text' id="inputCourseName" onChange={props.updateCourse} value={props.current}/>
                <button type='submit' id="inputSubmit" >Add Course</button>
            </form>
        </div>
    );
}

export default CourseForm;