import React, { Component } from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
            alertShow: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { error } = this.props;
        if (prevProps.error !== error) {
            this.setState({ alertShow: true });
        }
    }

    handleDrawerToggle = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    hideAlert = () => {
        this.setState({ alertShow: false });
    }

    render() {
        const { children, classes, error } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header title="Web Inventory" onMenuClick={this.handleDrawerToggle} />
                <Navigation mobileOpen={this.state.drawerOpen} handleDrawerToggle={this.handleDrawerToggle} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}

                    <Snackbar open={this.state.alertShow} autoHideDuration={6000} onClose={this.hideAlert}>
                        <Alert onClose={this.hideAlert} elevation={6} variant="filled"
                            severity="error">{error?.message}</Alert>
                    </Snackbar>
                </main >
            </div >
        );
    }
}

Page.propTypes = {

    error: PropTypes.object,
};
export default withStyles(styles, { withTheme: true })(Page);