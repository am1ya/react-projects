import React, { Component } from 'react';
import '../App.css';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ userId: 0, id: 0, title: "", body: "" }]
        }
    }

    componentDidMount() {
        /*fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>  response.json().then(data => ({status: response.status, body: data})))
        .then(obj => this.setState({status: obj.status}));*/

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json().then(data => ({ status: response.status, body: data })))
            .then(obj => this.setState({ data: obj.body }));
     }

    render() {

        return (
            <div>
                <h1 style={{ color: 'goldenrod' }}>API call directly from the component</h1>
                <p style={{ color: 'blueviolet' }}>Fetches data in JSON format</p>
                <p>{this.state.status}</p>
                {
                    <table className="view-table">
                        <tr className="view-table-row">
                            <th className="view-table-header" >Id</th>
                            <th className="view-table-header">User Id</th>
                            <th className="view-table-header" >Title</th>
                            <th className="view-table-header">Body</th>
                        </tr>

                        {this.state.data.map(data => (
                            <tr className="view-table-row">
                                <td className="view-table-data">{data.id}</td>
                                <td className="view-table-data">{data.userId}</td>
                                <td className="view-table-data">{data.title}</td>
                                <td className="view-table-data">{data.body}</td>
                            </tr>
                        ))}

                    </table>
                }
            </div>
        );
    }
}

export default ParentComponent  