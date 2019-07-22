import React from 'react'
import ContentEditable from 'react-contenteditable'

class ContentEditableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = {
            html: ['dchsdjhbsjdchb', '#csdcsdcsdc', 'sdcsdvs']
        }
    };

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };

    render = () => {
        return <ContentEditable
            innerRef={this.contentEditable}
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
         />

    };

};

// t[0] === '#' ? <span style={{color: 'red'}}>{t}</span> : <span>{t}</span>



export default ContentEditableComponent