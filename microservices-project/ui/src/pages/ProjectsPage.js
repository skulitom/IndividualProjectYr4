import React, { Component } from 'react';
import RestApi from '../api/RestApi';
import ProjectList from '../components/ProjectList'
import StickyFooter from 'react-sticky-footer';
import NewProjectDialog from '../components/NewProjectDialog';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        const restApi = new RestApi();
        this.state = {
            allProjects: [],
            allUsers: []
        };
        restApi.getAllProjects().then(json => this.setState({allProjects: json}));
        restApi.getAllUsers().then(json => this.setState({allUsers: json}));
        console.log(this.state);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ProjectsPage">
                <body>
                    <ProjectList json={this.state.allProjects}/>
                </body>
                <footer>
                    <StickyFooter
                        bottomThreshold={50}
                        normalStyles={{
                            padding: "2rem"
                        }}
                        stickyStyles={{
                            padding: "2rem"
                        }}
                    >
                        <NewProjectDialog/>
                    </StickyFooter>
                </footer>
            </div>

        );
    }
}

export default ProjectsPage;
