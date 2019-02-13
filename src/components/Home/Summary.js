import React from "react";

export default function Summary(props) {
    const { title, summary } = props;

    return (
        <section className="post-summary">
            <h4>{title}</h4>
            <p>{summary}</p>
        </section>
    );
}
