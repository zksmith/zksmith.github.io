import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import data from '../../public/projects.json';
import InfoBlock from './InfoBlock';
import ProjectCard from './ProjectCard';

var App = React.createClass({
    getInitialState(){
        return {
            currentProject: {},
            infoHidden: true,
            infoClassNames: classNames({'project-info': true, 'hidden': true}),
            cardClassNames: classNames({'project-card': true, 'gray': false})
        }
    },
    handleClick (clickedProject) {
        this.setState({currentProject: clickedProject});
        this.hideInfo(false);
        this.grayOutProjects(this.state.currentProject);
    },
    hideInfo (boolean) {
        this.setState({infoClassNames: classNames({
            'project-info': true,
            'hidden': boolean
        })});
    },
    grayOutProjects(boolean) {
        this.setState({cardClassNames: classNames({
            'project-card': true,
            'gray': boolean
        })});
    },
    render() {
        return (
            <main>
                <InfoBlock
                    classNames={this.state.infoClassNames}
                    hideInfo={this.hideInfo}
                    grayOutProjects={this.grayOutProjects}
                    currentProject={this.state.currentProject}
                />
                <section className="projects">
                    {data.projects.map(function(project){
                        return (
                            <ProjectCard
                                key={project.name}
                                classNames={this.state.cardClassNames}
                                project={project}
                                handleClick={this.handleClick} />
                        );
                    }, this)}
                </section>
            </main>
        );
    }
});

render(<App />, document.getElementById('app'));
