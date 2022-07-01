import React, { useState, useEffect } from 'react';
import './doItems.css';
import axios from 'axios';

const DoItems = (props) => {
    const [deletes, setDeletes] = useState(props.id);
    
    const deleteHandler = () => {  
        setDeletes(props.id)
        axios.delete(`https://dolistserver.semihc.keenetic.pro/delete/${deletes}`)
        .then(console.log('başarılı'));
    }
    const editHandler = () => {  

    }
    return (
        <div className='do-item'>
            <div className='do-day'>{props.dayTitle}</div>
            <div className='do-item__description'>
                <h2>{props.jobTitle}</h2>
                <div className='do-item__hours'>{props.jobHour}</div>
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={editHandler}>Edit</button>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            </div>
        </div>
    )
};
export default DoItems;