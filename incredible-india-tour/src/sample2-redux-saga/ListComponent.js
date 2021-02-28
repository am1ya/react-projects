import React from "react";
import { connect } from "react-redux";

function ListComponent({ articles }) {
    let id = 0;
    return (
        <ul>
            {articles.map(article => (
                <li key={id++}>{article.title}</li>
            ))}
        </ul>
    );
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

export default connect(mapStateToProps)(ListComponent)