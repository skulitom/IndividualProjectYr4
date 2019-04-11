import React, { Component } from 'react';
import RestApi from '../api/RestApi';
import UserList from '../components/UserList'
import StickyFooter from 'react-sticky-footer';
import NewUserDialog from '../components/NewUserDialog';

class UsersPage extends Component {
    constructor(props) {
        super(props);
        const restApi = new RestApi();
        this.state = {
            allUsers: []
        };
        restApi.getAllUsers().then(json => this.setState({allUsers: json}));
        console.log(this.state);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="UsersPage">
                <body>
                    <UserList json={this.state.allUsers}/>
                </body>
                <footer>
                    <StickyFooter
                        bottomThreshold={50}
                        normalStyles={{
                            padding: "2rem"
                        }}
                        stickyStyles={{
                            padding: "2rem"
                        }}
                    >
                        <NewUserDialog/>
                    </StickyFooter>
                </footer>
            </div>
        );
    }
}

export default UsersPage;
