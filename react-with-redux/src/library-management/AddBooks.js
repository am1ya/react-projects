import Reacr, { Component, Button } from 'react';
import { Container, CardGroup, Row, Col, Card, Modal, Form, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import addBookImg from './AddBook.jpg';
import './AddBooks.css';
import './library-store';
import { connect } from 'react-redux';

class AddBooks extends Component {
    constructor(props) {
        super()
        this.state = {
            books: [{ id: 0, bookId: 0, title: '', author: '', status: '' }],
            displayDialog: false
        }

        this.showModal = false;
        this.hideAddBooksModal = false;
    }

    handleAddClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_BOOK',
            payload: {
                id: this.state.bookId,
                title: this.state.title,
                author: this.state.author,
                status: this.state.author
            }
        })
        this.setState({ id: this.state.id + 1 });
    }

    handleCloseClick = (event) => {        
        this.setState({ displayDialog: false });
        this.showModal = this.state.displayDialog;     
        this.hideAddBooksModal = true;           
    }

    handleBookIdChange = (event) => {
        this.setState({ bookId: event.target.value });
    }

    handleTitleChange = (event) => {
        this.setState({ bookId: event.target.value });
    }

    handleAuthorChange = (event) => {
        this.setState({ bookId: event.target.value });
    }

    handleStatusChange = (event) => {
        this.setState({ bookId: event.target.value });
    }

    render() {    
        if (!this.hideAddBooksModal) {
            this.showModal = this.props.showAddBookModal;
          }
      
          this.hideAddBooksModal = false;  
        //const show = this.hideModal ? false : this.props.showAddBookModal;
        //this.hideModal = false;
        
        return (
            <Modal show={this.showModal}>
                <div class="card" style={{ backgroundColor: 'goldenrod' }}>
                    <div class="card-body">
                        <h2 class="card-title">Add Book</h2>
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
                    </div>
                    <div className="card-img-bottom">
                        <img class="card-img-bottom" src={addBookImg} />
                    </div>
                </div>
            </Modal>
        );
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return dispatch;
}*/

export default connect(null)(AddBooks)

//export default AddBooks