import React from 'react';
import s from './tasksEditor.module.css'
import AddTask from "./AddTask";


const TasksEditor = (props) => {

    let {buttonSaveEnable} = props;

    let onChange = (e) => {
        props.onChange(e);
    };

    let onKeyUp = (e) => {
        if (e.keyCode === 13) {
            props.onKeyUp();
        }
        if (e.keyCode === 32) {
            let arrText = props.text.split(' ');
            for (let i = 0; i < arrText.length; i++) {
                if (arrText[i][0] === '#') {
                    props.setHashTagLocalState(arrText[i]);
                }
            }
        }
    };

    let arrTaskText = [];

    let onClick = (e) => {
        e.currentTarget.children[0].contentEditable = true;
        props.toggleButtonSave(true);
        //e.currentTarget.children[e.currentTarget.children.length-1].hidden = false;
        props.setTextEdit(e.currentTarget.textContent);
        props.toggleButtonSave()
    };

    let onClickButtonSave = (e) => {
        //e.currentTarget.children[0].contentEditable = true;
        debugger
        props.toggleButtonSave(false);
            //props.setTextEditButtonSave(e.target.dataset.id);

    };

    let onChangeTask = (e) => {
        props.setTextEdit(e.currentTarget.textContent);

    };

    return <div>

        <div className={s.addTask}>
            <AddTask onChange={onChange} onKeyUp={onKeyUp} text={props.text} hashTagLocalState={props.hashTagLocalState} />
        </div>
        <button>Add Task</button>
        <div className={s.editBlock}>
            <input className={s.inputValue} onChange={onChange} onKeyUp={onKeyUp} value={props.text}/>
            <div>{props.hashTagLocalState}</div>
            <div>TASKS</div>
            <div className={s.taskList}  >
                {props.tasks.map(t => {
                    arrTaskText = t.task.split(' ');
                    return (
                        <div onClick={onClick}>
                            <div key={t.id} className={s.taskListPosition}  onInput={onChangeTask}>
                                {arrTaskText.map((t, index) => t[0] === '#'
                                    ? <a key={index} href={'/#'}>{t + ' '}</a>
                                    : t + ' '
                                )}

                            </div>
                            {props.buttonSaveEnable && <button key={t.id}  data-id={t.id} onClick={onClickButtonSave}>Save</button>}
                            </div>
                    )

                })}
            </div>

            <div className={s.hashTag}>
                <span>TAGS</span>
                {props.hashTag.map((ht, index) => <div key={index}><a href={'/#'}>{ht}</a></div>)}
            </div>


            <div id="contenteditable"
                 onInput={props.emitChange}
                 onBlur={props.emitChange}
                 contentEditable
                 dangerouslySetInnerHTML={{__html: props.text}}/>


        </div>

    </div>

};

export default TasksEditor;