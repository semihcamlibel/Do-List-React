import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import './Items.css';
import ItemsFilter from '../NewItems/ItemsFilter';
import ItemsList from './ItemsList';

const Items = (props) => {
    
    const days =
        [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];
    const nowDay = new Date();

    const [filteredDay, setFilteredDay] = useState(days[nowDay.getDay()]);

    const filterChangeHandler = (selectedDay) => {
        setFilteredDay(selectedDay);
    };

    const filteredJobs = props.items.filter((job) => {
        return job.dayTitle === filteredDay;
        
    });



    return (
        <div>
            <Card className='items'>
                <ItemsFilter
                    selected={filteredDay}
                    onChangeFilter={filterChangeHandler}
                />
                <ItemsList onDelete={props.onDelete} items={filteredJobs} />
            </Card>
        </div>
    );
};

export default Items;