import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import RestApi from '../api/RestApi';

const restApi = new RestApi();

class DeleteProjectDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            deleteProjectOpen: false
        };
    }

    openDeleteProject = () => {
        this.setState({ deleteProjectOpen: true });
    };

    closeDeleteProject = () => {
        this.setState({ deleteProjectOpen: false });
    };

    deleteProject = () => {
        restApi.removeProject(this.state.id);
        this.closeDeleteProject();
        window.location.reload();
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="danger" target="_blank" onClick={this.openDeleteProject} style={{margin: "10px"}}>
                    Delete Project
                </Button>
                <Dialog
                    open={this.state.deleteProjectOpen}
                    onClose={this.closeDeleteProject}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete the project?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This will permanently delete the project
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDeleteProject} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.deleteProject} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default DeleteProjectDialog;
