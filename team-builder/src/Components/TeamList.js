import React from "react";

function TeamList (props) {
return (
        <div>
            {props.team.map((teamMember, index) => (
                <div className="teamCard" key={index}>
                    <h1>{teamMember.name}</h1>
                    <h2>{teamMember.email}</h2>
                    <h3>{teamMember.role}</h3>
                    <h4>{teamMember.location}</h4>
                    <button>edit</button>
                </div>
            ))}
        </div>
    );
}

export default TeamList;