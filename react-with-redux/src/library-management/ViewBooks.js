import React, { Component } from 'react';
//import './library-store';
//import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
//import 'c:/PNS/ReactApps/react-with-redux/src/store/index';

class ViewBooks extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            postId: 2
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch({
            type: 'ADD_POST',
            payload: { id: this.state.postId, title: this.state.value }
        })

        this.setState({ postId: this.state.postId + 1 })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <ul>
                        {this.props.posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewBooks)