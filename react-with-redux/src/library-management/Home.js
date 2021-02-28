import React, { Component } from 'react';
import bgImage from './library.jpg';
import './Home.css'
import AddBooks from './AddBooks';
import ViewBooks from './ViewBooks';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBookModal: false,
            showViewBookModal: false
        }

        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleViewBook = this.handleViewBook.bind(this);
    }

    handleAddBook() {
        this.setState({ showAddBookModal: !this.state.showAddBookModal });
    }

    handleViewBook() {
        this.setState({ showViewBookModal: !this.state.showViewBookModal });
    }

    render() {
        return (
            <div className="Home-main">
                <div className="Home-title">
                    <p className="Home-title-text">Welcome to Nalanda Library</p>
                </div>
                <div className="Home-buttons-list">
                    <table className="Home-table">
                        <tr>
                            <button className="Home-button">Login</button>
                        </tr>
                        <tr>
                            <button className="Home-button" onClick={this.handleAddBook}>Add Book</button>
                            {this.state.showAddBookModal ? <AddBooks showAddBookModal={this.state.showAddBookModal} /> : null}
                        </tr>
                        <tr>
                            <button className="Home-button">Delete Book</button>
                        </tr>
                        <tr>
                            <button className="Home-button" onClick={this.handleViewBook}>View Book List</button>
                            {this.state.showViewBookModal ? <ViewBooks showViewBookModal={this.state.showViewBookModal} /> : null}
                        </tr>
                        <tr>
                            <button className="Home-button">Issue Book</button>
                        </tr>
                        <tr>
                            <button className="Home-button">Return Book</button>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home