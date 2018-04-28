import React from "react";
import Table from "./table";

const students = [{
    name: "Jimmy John",
    course: "Double Names",
    grade: 93
},{
    name: "John Kistler",
    course: "Engineering",
    grade: 99
},{
    name: "Bora Arcuna",
    course: "Medicine",
    grade: 99
}];

function App () {
    return <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
        </div>;


}

export default App;