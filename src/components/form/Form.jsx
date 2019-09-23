import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
            topic: "testTopic"
        };
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        });
    };

    handleChangeComment = event => {
        this.setState({
            comments: event.target.value
        });
    };

    handleChangeTopic = event => {
        this.setState({
            topic: event.target.value
        });
    };

    handleSubmit = event => {
        alert(`${this.state.topic} ${this.state.comments} ${this.state.username}`);
        event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label for="">Commments</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={comments}
                        onChange={this.handleChangeComment}
                    ></textarea>
                </div>
                <div>
                    <label for="">Topic</label>
                    <select
                        name=""
                        id=""
                        value={topic}
                        onChange={this.handleChangeTopic}
                    >
                        <option value="react">teact</option>
                        <option value="angular">angular</option>
                        <option value="flutter">flutter</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
