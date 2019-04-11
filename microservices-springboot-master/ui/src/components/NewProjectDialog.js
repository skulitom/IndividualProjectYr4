import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import RestApi from '../api/RestApi';

const externalVals = [
    {
        value: 'True',
        label: 'Yes',
    },
    {
        value: 'False',
        label: 'No',
    }
];

const restApi = new RestApi();

class NewProjectDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            describ: '',
            technologies: '',
            studentAgreement: '',
            supervisorAgreement: '',
            external: '',
            newProjectOpen: false
        };

        if(this.state.external == null){
            this.setState({external: 'False'});
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    openNewProject = () => {
        this.setState({ newProjectOpen: true });
    };

    closeNewProject = () => {
        this.setState({ newProjectOpen: false });
    };

    newProject = () => {
        restApi.addProject(this.state.title,
            this.state.describ,
            this.state.technologies,
            this.state.studentAgreement,
            this.state.supervisorAgreement,
            this.state.external
        );
        this.closeNewProject();
        window.location.reload();
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" target="_blank" onClick={this.openNewProject}>
                    New Project
                </Button>
                <Dialog
                    open={this.state.newProjectOpen}
                    onClose={this.closeNewProject}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"New Project"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"use this form to create a new project"}
                        </DialogContentText>
                        <TextField
                            id="new-title"
                            label={"Title"}
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-describ"
                            label={"Description"}
                            value={this.state.describ}
                            onChange={this.handleChange('describ')}
                            multiline={true}
                            rows={2}
                            rowsMax={4}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-technologies"
                            label={"Technologies"}
                            value={this.state.technologies}
                            onChange={this.handleChange('technologies')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-external"
                            select
                            label="External"
                            value={this.state.external}
                            onChange={this.handleChange('external')}
                            margin="normal"
                        >{externalVals.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeNewProject} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.newProject} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default NewProjectDialog;
