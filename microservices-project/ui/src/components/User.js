import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteUserDialog from './DeleteUserDialog';
import EditUserDialog from './EditUserDialog';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            role: this.props.role,
            maxProjects: this.props.maxProjects,
            admin: this.props.admin,
            projects: this.props.projects,
        };
    }

    render() {
        return (
            <Card >
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Typography gutterBottom variant="headline" component="h2">
                                {this.state.name}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography component="p">
                                {this.state.role}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography component="p">
                                {this.state.maxProjects}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography component="p">
                                {this.state.admin}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <EditUserDialog id={this.state.id}
                                       name={this.state.name}
                                       role={this.state.role}
                                       maxProjects={this.state.maxProjects}
                                       admin={this.state.admin}
                                       projects={this.state.projects}
                    />
                    <DeleteUserDialog id={this.state.id}/>
                </CardActions>
            </Card>
        );
    }
}

export default User;
