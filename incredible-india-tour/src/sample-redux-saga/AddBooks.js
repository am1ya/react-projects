import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addToDo } from './store/actions';
import { Component } from 'react';
import 'C:/PNS/ReactApps/incredible-india-tour/src/App.css';

class AddBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0, bookId: 0, title: '',
            showBooks: false
        }
    }

    handleTextChange = (event) => {
        //event.target.value
    }

    handleButtonClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'ADD_BOOK',
            payload: { id: this.state.id, title: this.state.title }
        })
        this.setState({ id: this.state.id + 1 })
    }

    handleViewButtonClick = (event) => {
        this.setState({ showBooks: !this.state.showBooks });
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Enter an item" onChange={this.handleTextChange}>
                            </Form.Control>
                            <InputGroup.Append>
                                <Button type="submit">Add To-Do</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
                <div class="card-body">
                    <h4 class="card-title">View Books</h4>
                    <button className="Home-button1" onClick={this.handleButtonClick}>Add Book</button>
                    <button className="Home-button1" onClick={this.handleViewButtonClick}>View Book</button>
                    {
                        this.state.showBooks ?
                            <div>
                                <h6 class="card-title">View Books</h6>
                                <table className="view-table">
                                    <tr className="view-table-row">
                                        <th className="view-table-header" >Book Id</th>
                                        <th className="view-table-header">Book Title</th>
                                    </tr>
                                    {this.props.books.map(book => (
                                        book.bookId > 0 ?
                                        <tr className="view-table-row">
                                            <td className="view-table-data">{book.bookId}</td>
                                            <td className="view-table-data">{book.title}</td>
                                        </tr> : null
                                    ))}

                                </table>
                            </div> : null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { books: state.books }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)

