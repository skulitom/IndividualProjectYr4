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

class NewUserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            role: '',
            maxProjects: '',
            admin: '',
            newUserOpen: false
        };

        if(this.state.admin == undefined){
            this.setState({admin: 'False'});
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    openNewUser = () => {
        this.setState({ newUserOpen: true });
    };

    closeNewUser = () => {
        this.setState({ newUserOpen: false });
    };

    newUser = () => {
        restApi.addUser(this.state.name,
            this.state.role,
            this.state.maxProjects,
            this.state.admin
        );
        this.closeNewUser();
        window.location.reload();
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" target="_blank" onClick={this.openNewUser}>
                    New User
                </Button>
                <Dialog
                    open={this.state.newUserOpen}
                    onClose={this.closeNewUser}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"New User"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"use this form to create a new user"}
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
                        <Button onClick={this.closeNewUser} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.newUser} color="primary" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default NewUserDialog;
