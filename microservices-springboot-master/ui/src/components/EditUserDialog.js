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

const adminVals = [
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

class EditUserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            role: this.props.role,
            maxProjects: this.props.maxProjects,
            admin: this.props.admin,
            projects: this.props.projects
        };

        if(this.state.admin == undefined){
            this.setState({admin: 'False'});
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    openEditUser = () => {
        this.setState({ editUserOpen: true });
    };

    closeEditUser = () => {
        this.setState({ editUserOpen: false });
    };

    editUser = () => {
        console.log(this.state.id);
        restApi.updateUser(this.state.id,
            this.state.name,
            this.state.role,
            this.state.maxProjects,
            this.state.projects,
            this.state.admin
        );
        this.closeEditUser();
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" target="_blank" onClick={this.openEditUser} style={{margin: "10px"}}>
                    Edit User
                </Button>
                <Dialog
                    open={this.state.editUserOpen}
                    onClose={this.closeEditUser}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"Edit the user called: " + this.props.name}
                        </DialogContentText>
                        <TextField
                            id="new-name"
                            label={"Name"}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-role"
                            label={"Role"}
                            value={this.state.role}
                            onChange={this.handleChange('role')}
                            multiline={true}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-maxProjects"
                            label={"Max Projects"}
                            value={this.state.maxProjects}
                            onChange={this.handleChange('maxProjects')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="new-admin"
                            select
                            label="Admin"
                            value={this.state.admin}
                            onChange={this.handleChange('admin')}
                            margin="normal"
                        >{adminVals.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeEditUser} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.editUser} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EditUserDialog;
