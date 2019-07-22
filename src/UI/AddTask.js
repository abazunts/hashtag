import React from 'react';
import s from './addtask.module.css'

const AddTask = (props) => {
    return (
        <div>
            <span>Title</span>
            <div className={s.title}>
                <input onChange={props.onChange} onKeyUp={props.onKeyUp} value={props.text}/>
                <div>{props.hashTagLocalState}</div>
            </div>
            <span>Description</span>
            <div className={s.description}>
                <textarea/>
            </div>
            <div className={s.button}>
                <button>Save</button>
                <button>Cancel</button>
            </div>

        </div>
    )

};

export default AddTask;