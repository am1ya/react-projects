import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addArticle } from './action2';

class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };
    }

    handleTextChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleButtonClick = (event) => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    }

    render() {
        return (
            <Form>
                <div>
                    <label>Title:</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleTextChange}>
                    </input>
                </div>
                <button type="submit" onClick={this.handleButtonClick}>
                    SUMBIT
                </button>
            </Form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

export default connect(null, mapDispatchToProps)(FormComponent)