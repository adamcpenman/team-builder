import React, { useState} from 'react';

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
        props.setTeam ([newTeam, ...props.team])
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Fill Out the Form Below.</h1>
            <label>
                <input type="text" 
                name="name" 
                placeholder="What is your name?" 
                onChange={handleChange}
                value={newTeam.name}/>
            </label>
              <label>
                <input type="text" 
                name="email" 
                placeholder="What is your email?"
                onChange={handleChange}
                value={newTeam.email}/>
            </label>
              <label>
                <input type="text" 
                name="role" 
                placeholder="What is your role?"
                onChange={handleChange}
                value={newTeam.role}/>
            </label>
              <label>
                <input type="text" 
                name="location" 
                placeholder="What is your location?"
                onChange={handleChange}
                value={newTeam.location}/>
            </label>
            <button className="formButton">Submit</button>
            </form>
        </div>
    );
}

export default Form;