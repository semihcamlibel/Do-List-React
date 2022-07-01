import React, { useState } from "react";
import axios from "axios";
import './ItemsForm.css';
import './NewItems.css';
const ItemsForm = (props) => {
    const [enteredDay, setEnteredDay] = useState('');
    const [enteredJob, setEnteredJob] = useState('');
    const [enteredHour, setEnteredHour] = useState('');

    const dayChangeHandler = (event) => {
        setEnteredDay(event.target.value);
    };
    const jobChangeHandler = (event) => {
        setEnteredJob(event.target.value);
    };
    const hourChangeHandler = (event) => {
        setEnteredHour(event.target.value);
    };

  
    const submitHandler = (event) => {
        event.preventDefault();

        const itemsData = {
            dayTitle: enteredDay,
            jobTitle: enteredJob,
            jobHour: enteredHour,
        }

        props.onSaveItemsData(itemsData);
        setEnteredDay('');
        setEnteredJob('');
        setEnteredHour('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-items__controls">
                <div className="new-items__control">
                    <label>Day</label>
                    <select value={enteredDay} onChange={dayChangeHandler}>
                        <option value=""></option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div>
            </div>
            <div className="new-items__controls">
                <div className="new-items__control">
                    <label>Job</label>
                    <input value={enteredJob} onChange={jobChangeHandler} type='text' />
                </div>
            </div>
            <div className="new-items__controls">
                <div className="new-items__control">
                    <label>Hour</label>
                    <input value={enteredHour} onChange={hourChangeHandler} type="time" id="appt" name="appt" min="06:00" max="23:59" />
                </div>
            </div>
            <div className="new-items__actions">
                <button className="new-items__control2" type="button" onClick={props.onClick}>Refresh</button>
                <button className="new-items__control2" type="submit">Add jobs</button>
                <button className="new-items__control2" type="submit" onClick={props.onCancel}>Logout</button>
            </div>
        </form >
    )
};

const UserForm = (props) => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredPass, setEnteredPass] = useState('');

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    };
    const passChangeHandler = (event) => {
        setEnteredPass(event.target.value);
    };


    const submitUser = (event) => {
        event.preventDefault();
        const userData = {
            username: enteredUser,
            password: enteredPass,
        }

        props.onLoginUserData(userData);
        setEnteredUser('');
        setEnteredPass('');
    }  
    
    return (
        <form onSubmit={submitUser}>
            <div className="new-items__controls">
                <div className="new-items__control">
                    
                    <label>Username</label>
                    <input  required={true} value={enteredUser} onChange={userChangeHandler}  type='text' />
                </div>
            </div>
            <div className="new-items__controls">
                <div className="new-items__control">
                    <label>Password</label>
                    <input required={true} value={enteredPass}  onChange={passChangeHandler} type='password' />

                </div>
            </div>
            <div className="new-items__actions">
                
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Login</button>
            </div>
        </form >
    )
};

const errorLabel = props => {
    <label>Wrong username or password</label>
}

export default ItemsForm;
export {UserForm};
export {errorLabel};