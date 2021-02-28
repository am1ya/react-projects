import React from 'react';
import { connect } from 'react-redux'
import '../App.css';

let NewsItem = ({ articles }) => (
    articles ?
        <div>
            <p></p>
            {
                <table className="view-table">
                    <tr className="view-table-row">
                        <th className="view-table-header">User Id</th>
                        <th className="view-table-header" >Id</th>
                        <th className="view-table-header" >Tile</th>
                        <th className="view-table-header" >Body</th>
                    </tr>

                    {articles.map(article => (
                        <tr className="view-table-row">
                            <td className="view-table-data">{article.userId}</td>
                            <td className="view-table-data">{article.id}</td>
                            <td className="view-table-data">{article.title}</td>
                            <td className="view-table-data">{article.body}</td>
                        </tr>
                    ))}
                </table>
            }
        </div> :
        null
);

const mapStateToProps = (state) => ({
    articles: state.news,
})

NewsItem = connect(
    mapStateToProps,
    null
)(NewsItem)

export default NewsItem;