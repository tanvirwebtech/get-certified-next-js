import React from "react";

const SingleBlog = ({ params }) => {
    const id = params.id;
    return <div>SingleBlog {id}</div>;
};

export default SingleBlog;
