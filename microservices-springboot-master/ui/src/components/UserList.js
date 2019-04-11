import React, { Component } from 'react';
import User from './User'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: this.props.json,
        };
    }


    render() {
        return (
            <div className="UserList">
                <Grid container spacing={24} style={{margin: "10px"}}>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Role
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Max Projects
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" component="h2">
                            Admin
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                {this.props.json.map(o => <User id={o.id} name={o.name} role={o.role} maxProjects={o.maxProjects} admin={o.admin} projects={o.projects} />)}
            </div>
        );
    }
}

export default UserList;
