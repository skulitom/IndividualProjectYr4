import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import Login from './pages/Login'
import UsersPage from './pages/UsersPage'
import ProjectsPage from './pages/ProjectsPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Login'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <div>
                <AppBar title="Login" position="static">
                  <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {this.state.currentPage}
                    </Typography>
                  </Toolbar>
                  <Tabs>
                    <Tab label="Projects" onClick={() => this.setState({currentPage: 'Projects'})} />
                    <Tab label="Users" onClick={() => this.setState({currentPage: 'Users'})}/>
                    <Tab label="Login" onClick={() => this.setState({currentPage: 'Login'})}/>
                  </Tabs>
                </AppBar>
              </div>
          </div>
        </header>
          {(() => {
              switch(this.state.currentPage) {
                  case 'Projects':
                      return <ProjectsPage />;
                  case 'Users':
                      return <UsersPage />;
                  default:
                      return <Login/>
              }
          })()}
      </div>
    );
  }
}

export default App;
