import React, { Component } from 'react';
import '../App.css';

class RailsConsumerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 0, title: "", done: false, created_at: "", updated_at: "" }]
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/v1/todos")
            .then(response => response.json().then(data => ({ status: response.status, body: data })))
            .then(obj => this.setState({ data: obj.body }));
     }

    render() {

        return (
            <div>
                <h1 style={{ color: 'goldenrod' }}>Connected to Rails API</h1>
                <p style={{ color: 'blueviolet' }}>Fetches data in JSON format</p>
                <p>{this.state.status}</p>
                {
                    <table className="view-table">
                        <tr className="view-table-row">
                            <th className="view-table-header" >Id</th>
                            <th className="view-table-header" >Title</th>
                        </tr>

                        {this.state.data.map(data => (
                            <tr className="view-table-row">
                                <td className="view-table-data">{data.id}</td>
                                <td className="view-table-data">{data.title}</td>
                            </tr>
                        ))}

                    </table>
                }
            </div>
        );
    }
}

export default RailsConsumerComponent  