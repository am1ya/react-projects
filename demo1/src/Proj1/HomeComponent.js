import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import './style.css';
import addBookImg from './AddBook.jpg';
import mainImg from './MainLibrary.jpg';
import NavBarComponent from './NavBarComponent';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0, title: '', bookId: 0, author: '', status: '',
            showAbout: true,
            showAddBook: false,
            showView: false
        }
        this.showDiv = false;
    }

    handleButtonClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'ADD_POST',
            payload: { id: this.state.postId, title: this.state.title }
        })
        this.setState({ id: this.state.id + 1 })
    }

    handleBoodIdChange = (event) => {
        this.setState({ id: event.target.value });
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleAddBook = (event) => {
        this.showDiv = true;
        this.setState({ showAddBook: this.showDiv });
        this.setState({ showAbout: false });
        this.setState({ showView: false });
    }

    handleViewBook = (event) => {
        this.showDiv = true;
        this.setState({ showView: this.showDiv });
        this.setState({ showAbout: false });
        this.setState({ showAddBook: false });
    }

    handleAddClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'ADD_POST',
            payload: {
                id: this.state.postId,
                title: this.state.title,
                bookId: this.state.bookId,
                author: this.state.author,
                status: this.state.status
            }
        })
        this.setState({ id: this.state.id + 1 })
    }

    handleBookIdChange = (event) => {
        this.setState({ bookId: event.target.value });
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleAuthorChange = (event) => {
        this.setState({ author: event.target.value });
    }

    handleStatusChange = (event) => {
        this.setState({ status: event.target.value });
    }

    render() {
        return (
            <div className="Home-main">
                <NavBarComponent></NavBarComponent>
                <div className="Home-title">
                    <p className="Home-title-text">Welcome to Nalanda Library</p>
                </div>
                <div className="main-content-div">
                    <table className="Home-table">
                        <ButtonGroup>
                                <button className="Home-button1" onClick={this.handleAddBook}>Add Book</button>
                                <button className="Home-button1" onClick={this.handleViewBook}>View Book</button>
                                <button className="Home-button1" disabled='true'onClick={this.handleAddBook}>Delete Book</button>
                                <button className="Home-button1" disabled='true'onClick={this.handleAddBook}>Issue Book</button>
                                <button className="Home-button1" disabled='true' onClick={this.handleAddBook}>Return Book</button>
                            </ButtonGroup>
                    </table>
                    {
                        this.state.showAbout ?
                            <div>
                                <div className="card-parent" show={false}>
                                    <div class="card-body">
                                        <h2 class="card-title">Explore the world of books</h2>
                                        <div class="card-text">
                                            “To those with ears to hear, libraries are really very noisy places. On their shelves we hear the captured voices of the centuries-old conversations that makes up our civilization.” – Timothy Healy
                                        </div>
                                    </div>
                                    <div className="card-img-bottom">
                                        <img class="card-img-bottom" src={mainImg} />
                                    </div>
                                </div>
                            </div> : null
                    }
                    {
                        this.state.showAddBook ?

                            <div className="card-parent">
                                <div class="card-body">
                                    <h4 class="card-title">Add Book</h4>
                                </div>
                                <table className="AddBooks-table">
                                    <tr>
                                        <td>
                                            <label>Book Id</label>
                                        </td>
                                        <td>
                                            <input type="text" onChange={this.handleBookIdChange}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Book Title</label>
                                        </td>
                                        <td>
                                            <input type="text" onChange={this.handleTitleChange}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Author</label>
                                        </td>
                                        <td>
                                            <input type="text" onChange={this.handleAuthorChange}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Book Status</label>
                                        </td>
                                        <td>
                                            <input type="text" placeholder="Available/Issued" onChange={this.handleStatusChange}></input>
                                        </td>
                                    </tr>
                                </table>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <ButtonGroup>
                                        <button onClick={this.handleAddClick}>Add</button>
                                        <button onClick={this.handleCloseClick}>Close</button>
                                    </ButtonGroup>
                                </div>
                                <div className="card-img-bottom">
                                    <img class="card-img-bottom" src={addBookImg} />
                                </div>
                            </div> : null
                    }
                    {
                        this.state.showView ?
                            <div>
                                <div className="card-parent">
                                    <div class="card-body">
                                        <h4 class="card-title">View Books</h4>
                                        <table className="view-table">
                                            <tr className="view-table-row">
                                                <th className="view-table-header" >Book Id</th>
                                                <th className="view-table-header">Book Title</th>
                                                <th className="view-table-header">Author</th>
                                                <th className="view-table-header">Status</th>
                                            </tr>
                                            {this.props.posts.map(post => (
                                                post.bookId > 0 ?
                                                    <tr className="view-table-row">
                                                        <td className="view-table-data">{post.bookId}</td>
                                                        <td className="view-table-data">{post.title}</td>
                                                        <td className="view-table-data">{post.author}</td>
                                                        <td className="view-table-data">{post.status}</td>
                                                    </tr> : null
                                            ))}
                                        </table>
                                    </div>
                                    <div className="card-img-bottom">
                                        <img class="card-img-bottom" src={mainImg} />
                                    </div>
                                </div>
                            </div> : null
                    }
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)