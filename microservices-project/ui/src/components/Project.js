import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteProjectDialog from './DeleteProjectDialog';
import EditProjectDialog from './EditProjectDialog';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            describ: this.props.describ,
            technologies: this.props.technologies,
            studentAgreement: this.props.studentAgreement,
            supervisorAgreement: this.props.supervisorAgreement,
            external: this.props.external,
        };

        if(this.state.external == undefined || this.state.external == ''){
            this.setState({external: 'False'})
        }
        console.log('Is it external: ' + this.state.external)
    }

    render() {
        return (
        <Card >
            <CardContent>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.state.title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="p">
                            {this.state.describ}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="p">
                            {this.state.technologies}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="p">
                            {this.state.external}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <EditProjectDialog id={this.state.id}
                                   title={this.state.title}
                                   describ={this.state.describ}
                                   technologies={this.state.technologies}
                                   studentAgreement={this.state.studentAgreement}
                                   supervisorAgreement={this.state.supervisorAgreement}
                                   external={this.state.external}
                />
                <DeleteProjectDialog id={this.state.id}/>
            </CardActions>
        </Card>
        );
    }
}

export default Project;
