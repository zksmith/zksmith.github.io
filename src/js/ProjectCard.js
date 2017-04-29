import React from 'react';
import classNames from 'classnames';

var ProjectCard = React.createClass({
    render () {
        return (
            <div tabIndex = "-1"
            className={this.props.classNames}
            onClick={() => this.props.handleClick(this.props.project)}>
                <img src={this.props.project.img}></img>
                <span className="card-overlay"></span>
                <span className="card-text">
                    <p>{this.props.project.name}</p>
                    <p className="light-text">{this.props.project.category}</p>
                </span>
            </div>
        );
    }
});

export default ProjectCard;
