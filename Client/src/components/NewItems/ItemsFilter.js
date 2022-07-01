import React from 'react';
import './ItemsFilter.css';

const ItemsFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='items-filter'>
            <div className='items-filter__control'>
                <label>Filter by day</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='Sunday'>Sunday</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                </select>
            </div>
        </div>
    );
};

export default ItemsFilter;