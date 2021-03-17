import React, {Component} from 'react'
import {ReactComponent as GitHubIcon} from '../../assets/github_icon.svg'
import {ReactComponent as TwitterIcon} from '../../assets/twitter_icon.svg'
import './footer.css'

export default function Footer(){
    return (
        <footer className="main-footer">
            Developed by Pablo FELPs
            <br></br>
            <div className="footer-icons">
                <a href="https://github.com/PabloFLPs" target="_new">
                    <GitHubIcon/>
                </a>
                <a href="https://twitter.com/pablo_felps" target="_new">
                    <TwitterIcon/>
                </a>
            </div>
        </footer>
    )
}
