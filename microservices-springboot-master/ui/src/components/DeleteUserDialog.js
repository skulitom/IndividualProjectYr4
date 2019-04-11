import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import RestApi from '../api/RestApi';

const restApi = new RestApi();

class DeleteUserDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            deleteUserOpen: false
        };
    }

    openDeleteUser = () => {
        this.setState({ deleteUserOpen: true });
    };

    closeDeleteUser = () => {
        this.setState({ deleteUserOpen: false });
    };

    deleteUser = () => {
        restApi.removeUser(this.state.id);
        this.closeDeleteUser();
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="danger" target="_blank" style={{margin: "10px"}} onClick={this.openDeleteUser} >
                    Delete User
                </Button>
                <Dialog
                    open={this.state.deleteUserOpen}
                    onClose={this.closeDeleteUser}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this user?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This will permanently delete the user
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDeleteUser} color="primary">
                            Dismiss
                        </Button>
                        <Button onClick={this.deleteUser} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default DeleteUserDialog;
