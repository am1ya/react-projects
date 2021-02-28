import React, { Component } from 'react';
import '../App.css';

class RestApiCallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [{ bookId: 0, tite: "", author: "", status: "" }],
            clicked: false
        }
    }

    componentDidMount() {
        /*fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>  response.json().then(data => ({status: response.status, body: data})))
        .then(obj => this.setState({status: obj.status}));*/

        fetch("http://localhost:8080/sample-library/webapi/bookDetails")
            .then(response => response.json().then(jsonObject => ({ body: jsonObject })))
            .then(obj => this.setState({ books: obj.body }));
     }

     onbuttonClicked = (event) => {
         this.setState({clicked: !this.state.clicked});
     }

    render() {

        return (
            <div>
                <h1 style={{ color: 'goldenrod' }}>API call directly from the component</h1>
                <p style={{ color: 'blueviolet' }}>Fetches data in JSON format</p>
                <button onClick={this.onbuttonClicked}>Show Details</button>
                <p>{this.state.status}</p>
                {
                    <table className="view-table">
                        <tr className="view-table-row">
                            <th className="view-table-header">Book Id</th>
                            <th className="view-table-header" >Title</th>
                            <th className="view-table-header" >Author</th>
                            <th className="view-table-header" >Status</th>
                        </tr>

                        {this.state.books.map(book => (
                            <tr className="view-table-row">
                                <td className="view-table-data">{book.bookId}</td>
                                <td className="view-table-data">{book.tite}</td>
                                <td className="view-table-data">{book.author}</td>
                                <td className="view-table-data">{book.status}</td>
                            </tr>
                        ))}

                    </table>
                }
            </div>
        );
    }
}

export default RestApiCallComponent  