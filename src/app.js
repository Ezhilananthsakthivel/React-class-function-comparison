import React from "react";
import Course from "./Course";
import User from "./User"

// function app(){
//     return <div>
//         <User/>
//         <Course name="react" />
//         <Course name="c"/>
//         <Course name="python"/>
//         <Course name="java"/>
//         <Course name="php"/>
//     </div>
// }

function app() {
    const course = [
        {
            name: "react"
        },
        {
            name: "c"
        },
        {
            name: "python"
        },
        {
            name: "java"
        },
        {
            name: "php"
        }
    ]

    return (
        <div>
            <User />
            {course.map(course => {
                //return <Course name={course.name} />
                return <Course {...course}/>
            })}
        </div>
    )
}

export default app;