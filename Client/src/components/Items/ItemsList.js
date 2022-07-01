import React from "react";
import DoItems from "./doItems";
import './ItemsList.css';

const ItemsList = props => {

    if(props.items.length === 0) {
        return <h2 className="items-list__fallback">Found no items</h2>
    }
    return( 
    <ul className="items-list">
        {
            props.items.map((job) => ( 
                <DoItems
                    onDelete={props.onDelete}
                    id={job._id}
                    key={job._id}
                    dayTitle={job.dayTitle}
                    jobTitle={job.jobTitle}
                    jobHour={job.jobHour}
                />
            ))
        }
    </ul>
    );
};

export default ItemsList;