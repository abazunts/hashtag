const SET_TASK_INPUT = 'TASKS/SET_TASK_INPUT';
const SET_HASH_TAG = 'TASKS/SET_HASH_TAG';
const SET_EDIT_TASK = 'TASKS/SET_EDIT_TASK';

const initState = {
    taskInput: [],
    tasks: [{
        id: 1,
        task: ''
    }],

    hashTag: []
};

const tasksReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TASK_INPUT:
            return {
                ...state,
                tasks: [...state.tasks, {id: state.tasks.length + 1, task: action.task}]
            };
        case SET_HASH_TAG:
            return {
                ...state,
                hashTag: [...state.hashTag, action.hashTag]
            };
        case SET_EDIT_TASK:
            let tasks = {...state, ...state.tasks};
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === action.id) {
                    tasks[i].task = action.textEdit
                }
            }
            return {
                ...state,
                tasks: tasks
            }


        default:
            return state;
    }

};

export const setTaskInput = (task) => ({type: SET_TASK_INPUT, task});
export const setHashTag = (hashTag) => ({type: SET_HASH_TAG, hashTag});
export const setEditTask = (textEdit, id) => ({type: SET_EDIT_TASK, textEdit, id});


export const setTask = (task, hashTag) => (dispatch) => {
    dispatch(setTaskInput(task));
    dispatch(setHashTag(hashTag));
};

export default tasksReducer;