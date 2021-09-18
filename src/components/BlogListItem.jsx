import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogListItem({id,title}) {
    return (
        <>
            <li className="list-group-item d-flex">
                <Link className="align-self-center text-decoration-none text-dark text-capitalize" to={`/blogs/${id}`}>{title}</Link> 
                <Link to={`/edit/${id}`} className="btn btn-warning ms-auto align-self-center  ">Edit</Link>
            </li>
        </>
    )
}
