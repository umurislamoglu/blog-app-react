import React from 'react'
import BlogList from './BlogList'

export default function BlogListPage() {
    return (
        <div className="d-flex flex-column ">
            <p className="align-self-center text-uppercase fs-2 fw-normal mt-3">Blog List</p> 
            <BlogList/>
        </div>
    )
}
