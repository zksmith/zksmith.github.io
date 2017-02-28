import React from 'react';
import classNames from 'classnames';

var InfoBlock = React.createClass({
    resetPage() {
        this.props.hideInfo(true);
        this.props.grayOutProjects(false);
    },
    render () {
        let currentProject = this.props.currentProject;
        return (
            <article className={this.props.classNames}>
                <div className="info-text">
                    <h1>{currentProject.name}</h1>
                    <p>{currentProject.description}</p>
                    {currentProject.repo !== "" &&
                        <a className="button" target="_blank" href={currentProject.repo}>GitHub Repo</a>
                    }
                    {currentProject.demo !== "" &&
                        <a className="button" target="_blank" href={currentProject.demo}>Live Demo</a>
                    }
                </div>
                <img src={currentProject.img} alt=""/>
                <strong className="close-button" onClick={() => this.resetPage()}>X</strong>
            </article>
        );
    }
});

export default InfoBlock;
