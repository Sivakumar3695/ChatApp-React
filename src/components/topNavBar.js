import React from 'react';
import '../static/css/navbar.css';

class TopNavBar extends React.Component{

    renderNavLinkHeaders(){
        return(
            <React.Fragment>
                   <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">One-to-One</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Groups</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Audio Calls</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Video Calls</a>
                    </li>
            </React.Fragment>
        );
    }

    render(){
        return (
            <div className="navbar-container">
                <ul className="container-list">
                    <li className="brand nav-item">
                        <a className="nav-link" href="#">LiLChat</a>
                    </li>
                    {this.renderNavLinkHeaders()}
                </ul>
            </div>
        );
    }
}

export default TopNavBar;