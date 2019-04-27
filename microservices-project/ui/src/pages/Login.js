import React, { Component } from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';

class Login extends Component {


    render() {
        return (
            <body>
                <Paper>
                    <div>
                        <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                        <TextField id="username" label="Password" type="password" fullWidth required />

                        <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox color="primary" />
                                } label="Remember me" />
                            </Grid>
                            <Grid item>
                                <Button variant="text" color="primary">Forgot Password</Button>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Button variant="outlined" color="primary">Login</Button>
                        </Grid>
                    </div>
                </Paper>
            </body>
        );
    }
}

export default Login;
