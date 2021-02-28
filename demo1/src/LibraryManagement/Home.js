import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './library.jpg';
import NavigationBar from './NavigationBar';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>

                <div className="Home-main">

                    <div className="left-panel">
                        <table className="Home-table">
                            <tr>
                                <button className="Home-button">Login</button>
                            </tr>
                            <tr>
                                <button className="Home-button" onClick={this.handleAddBook}>Add Book</button>
                            </tr>
                            <tr>
                                <button className="Home-button">Delete Book</button>
                            </tr>
                            <tr>
                                <button className="Home-button" onClick={this.handleViewBook}>View Book List</button>
                            </tr>
                            <tr>
                                <button className="Home-button">Issue Book</button>
                            </tr>
                            <tr>
                                <button className="Home-button">Return Book</button>
                            </tr>
                        </table>
                    </div>
                    <div className="right-panel">
                        <p>Firs</p>
                        <p>Firs</p>
                        <p>Firs</p>
                        <p>Firs</p>
                    </div>


                </div>
            </div>
        );

    }
}

export default Home;
