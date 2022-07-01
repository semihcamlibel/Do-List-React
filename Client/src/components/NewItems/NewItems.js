import React, {useState} from 'react';
import axios from "axios";
import { UserForm } from './ItemsForm';
import ItemsForm from './ItemsForm';
import './NewItems.css';
import { errorLabel } from './ItemsForm';
import Items from '../Items/Items';

const NewItems = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const saveItemsDataHandler = (enteredItemsData) => {
        const ItemsData = {
            
            ...enteredItemsData,
            id: Math.random().toString()
        };
        axios.post('https://dolistserver.semihc.keenetic.pro/newjob', ItemsData);
        
    };

    const startEditingHandler = () => {
        setIsEditing(true);
        setIsLogin(false);
    }

    const startLoginHandler = () => {
        setIsLogin(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
        
    }
    const stopLoginHandler = () => {
        setIsLogin(false);
    }
    const userDataHandler = (enteredUserData) => {
        const UserData = {
            
            ...enteredUserData,
        };
        const userLogin = {
            username: UserData.username,
            password: UserData.password,
        }  
    };


    return (
        <div className='new-items'>
            {!isLogin && !isEditing && <button onClick={startLoginHandler}>Login</button>}
            {isEditing && <ItemsForm onCancel={stopEditingHandler} onSaveItemsData={saveItemsDataHandler} />}
            {isLogin && <errorLabel /> && <UserForm okLogin={startEditingHandler} onCancel={stopLoginHandler} onLoginUserData={userDataHandler}></UserForm>}
        </div>
    );
};

export default NewItems;