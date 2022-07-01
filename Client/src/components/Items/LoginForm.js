import React, { useState } from "react";
import axios from "axios";
import '../NewItems/ItemsForm.css';

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
        props.okLogin();
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

export default UserForm;
