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

class EditProjectDialog extends Component {
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
            editProjectOpen: false
        };

        if(this.state.external == null){
            this.setState({external: 'False'});
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    openEditProject = () => {
        this.setState({ editProjectOpen: true });
    };

    closeEditProject = () => {
        this.setState({ editProjectOpen: false });
    };

    editProject = () => {
        console.log(this.state.id);
        restApi.updateProject(this.state.id,
            this.state.title,
            this.state.describ,
            this.state.technologies,
            this.state.studentAgreement,
            this.state.supervisorAgreement,
            this.state.external);
        this.closeEditProject();
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" target="_blank" onClick={this.openEditProject} style={{margin: "10px"}}>
                    Edit Project
                </Button>
                <Dialog
                    open={this.state.editProjectOpen}
                    onClose={this.closeEditProject}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Edit Project"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"Edit the project called: " + this.props.title}
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
                        <Button onClick={this.closeEditProject} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.editProject} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EditProjectDialog;
