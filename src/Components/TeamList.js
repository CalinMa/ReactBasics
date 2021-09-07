import React from "react";
import '../App.css';
import ListItem from "./ListItem";

function TeamList() {
    const persons = [
        {firstName: 'James', lastName:'Smith', phone: '0741000000', dateOfBirth:'10.10.1995', city: 'New York', country: 'USA', email: 'email@email.com', skype: '@1234example1'},
        {firstName: 'James', lastName:'Smith', phone: '0741000001', dateOfBirth:'10.10.1996', city: 'Boston', country: 'USA', email: 'email@email.com', skype: '@1234example2'},
        {firstName: 'James', lastName:'Smith', phone: '0741000002', dateOfBirth:'10.10.1994', city: 'Denver', country: 'USA', email: 'email@email.com', skype: '@1234example3'},
        {firstName: 'James', lastName:'Smith', phone: '0741000003', dateOfBirth:'10.10.1993', city: 'Chicago', country: 'USA', email: 'email@email.com', skype: '@1234example4'},
        {firstName: 'James', lastName:'Smith', phone: '0741000004', dateOfBirth:'10.10.1992', city: 'Miami', country: 'USA', email: 'email@email.com', skype: '@1234example5'},
        {firstName: 'James', lastName:'Smith', phone: '0741000005', dateOfBirth:'10.10.1991', city: 'San Francisco', country: 'USA', email: 'email@email.com', skype: '@1234example6'},
    ]

    return (
        <div className="List-Border">
            <div>
                {persons.map((data,index) => (
                <ListItem data={data} key={index}/>
                ))}

            </div>

        </div>
    );
}
const TableRow = ({row}) => (
    <tr>
        <td key={row.firstName}>{row.firstName}</td>
        <td key={row.dateOfBirth}>{row.dateOfBirth}</td>
        <td key={row.email}>{row.email}</td>
    </tr>

)
const Table = ({data}) => (
    <table>
        {data.map(row => {
            return <TableRow row={row}/>
        })}
    </table>
)
function showDownButton () {
    document.getElementById("Up").style.display = "none";
    document.getElementById("Down").style.display = "inline-block"
    document.getElementById("dropDownDiv").style.display = "none";
}
function showUpButton () {
    document.getElementById("Up").style.display = "inline-block";
    document.getElementById("Down").style.display = "none";
    document.getElementById("dropDownDiv").style.display = "block";
}

export default TeamList;