import React, { useState, useEffect } from 'react';

const Form = props => {
    const initialTeam = { name: "", email: "", role:"", location:""}
    const [newTeam, setNewTeam] = useState(initialTeam);

    

    const handleChange = event => {
        setNewTeam({ 
            ...newTeam,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
        props.setTeam ([newTeam, ...props.team]);
        resetForm();
    };

    const resetForm = () => {
        setNewTeam(initialTeam);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Fill Out the Form Below.</h1>
            <label>
                <input type="text" 
                name="name" 
                placeholder="Name" 
                onChange={handleChange}
                value={newTeam.name}/>
            </label>
              <label>
                <input type="text" 
                name="email" 
                placeholder="Email"
                onChange={handleChange}
                value={newTeam.email}/>
            </label>
              <label>
                <input type="text" 
                name="role" 
                placeholder="Role"
                onChange={handleChange}
                value={newTeam.role}/>
            </label>
              <label>
                <input type="text" 
                name="location" 
                placeholder="Location"
                onChange={handleChange}
                value={newTeam.location}/>
            </label>
            <button type="submit" className="formButton">Submit</button>

            </form>
        </div>
    );
}

export default Form;