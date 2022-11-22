import React from "react"


//function based
 function Course(props){
//     // let name=props.name
//     // name=sads
    return <div className="card">
    <div className="card-body">
      <h5 className="card-title">course title</h5>
      <p className="card-text">{props.name}</p>
      <a href="#" className="btn btn-primary">Go</a>
    </div>
  </div>
}

// class based

// class Course extends React.Component{
//     render(){
//         return(
//             <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">course title</h5>
//               <p className="card-text">{this.props.name}</p>
//               <a href="#" className="btn btn-primary">Go</a>
//             </div>
//           </div> 
//         )
//     }
// }

export default Course;