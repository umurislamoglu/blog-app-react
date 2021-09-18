import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/AuthActions'

export default function Header() {
    return (
        <header className="nav d-flex bd-highlight mb-3">
            <h1 className="nav-item me-auto p-2 bd-highlight" >Blog App</h1>
            <NavLink to="/blogs" activeClassName="active" className="nav-link align-self-center">Blogs</NavLink>
            <NavLink to="/create" activeClassName="active"className="nav-link align-self-center" >Create</NavLink>
            <button className="btn btn-outline-danger btn-sm nav-item ms-auto  bd-highlight p-2 align-self-center " onClick = {logout}>Logout</button>
            
        </header>
    )
}
