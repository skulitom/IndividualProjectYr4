import React, { Component } from 'react';
import Project from './Project'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: this.props.json,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ProjectList">
                <Grid container spacing={24} style={{margin: "10px"}}>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Title
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Description
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Technologies
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            External
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                {
                    this.props.json.map(o => <Project id={o.id} title={o.name} describ={o.describ} technologies={o.technologies} external={o.external} studentAgreement={o.studentAgreement} supervisorAgreement={o.supervisorAgreement}/>)
                }
            </div>
        );
    }
}

export default ProjectList;
