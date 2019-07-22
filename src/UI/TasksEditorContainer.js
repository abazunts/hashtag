import React from 'react';
import TasksEditor from "./TasksEditor";
import {connect} from "react-redux";
import {setHashTag, setTaskInput} from "../BLL/tasksReducer";


class TasksEditorContainer extends React.Component {

    state = {
        text: '',
        textEdit: '',
        hashTagLocalState: [],
        buttonSaveEnable: false
    };

    onChange = (e) => {
        this.setState({text: e.currentTarget.value});
    };

    onKeyUp = () => {
        this.props.setTaskInput(this.state.text);
        let arrTaskText = this.state.text.split(' ');
        arrTaskText.map(t => t[0] === '#' && (this.props.hashTag.indexOf(t) === -1) && this.props.setHashTag(t));
        this.setState({text: ''});
        this.setState({hashTagLocalState: []})
    };

    setHashTagLocalState = (hashTagLocalState) => {
        if (this.state.hashTagLocalState.indexOf(hashTagLocalState) === -1) {
            this.setState({hashTagLocalState: [...this.state.hashTagLocalState, hashTagLocalState]})
        }
    };

    toggleButtonSave = (value) => {
        this.setState({buttonSaveEnable: value})
    };

    setTextEdit = (text) => {
        this.setState({textEdit: text})
    };

    setTextEditButtonSave = (id) => {
        this.props.setTaskInput(this.state.textEdit, id);
    };

    render() {
        return <TasksEditor onChange={this.onChange}
                            tasks={this.props.tasks}
                            text={this.state.text}
                            onKeyUp={this.onKeyUp}
                            hashTag={this.props.hashTag}
                            hashTagLocalState={this.state.hashTagLocalState}
                            setHashTagLocalState={this.setHashTagLocalState}
                            buttonSaveEnable={this.state.buttonSaveEnable}
                            toggleButtonSave={this.toggleButtonSave}
                            textEdit={this.state.textEdit}
                            setTextEdit={this.setTextEdit}
                            setTextEditButtonSave={this.setTextEditButtonSave}
        />
    }
}

let mapState = (state) => {
    return {
        tasks: state.tasks.tasks,
        hashTag: state.tasks.hashTag
    }
};


export default connect(mapState, {setTaskInput, setHashTag})(TasksEditorContainer);