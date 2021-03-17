import React from 'react'
import {ReactComponent as APIIcon} from '../../assets/movie_icon.svg'
import './header.css'

export default function Header() {
    return (
        <header className="header-initial">
            <APIIcon />
            <div className="page-name">
                <strong>MVP Commit Jr. - DevWeb</strong>
            </div>
            <div className="menu-links">
                <strong>
                    <spam> Releases </spam>
                    <spam> | </spam>
                    <spam> Highlights </spam>
                </strong>
            </div>
                <input type="text" className="search-input" placeholder="Search"></input>
        </header>
    )
}
