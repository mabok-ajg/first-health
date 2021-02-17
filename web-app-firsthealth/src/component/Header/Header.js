import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import logoFH from '../Header/logoFH.png'

class Header extends Component {

    render() {
        const { classes, onMenuClick } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        id="menu-button"
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onMenuClick}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography  className={classes.titleBar} id="title-label" variant="h6" noWrap>
                        FIRST HEALTH
                    </Typography> */}
                    <img src={logoFH} width="145"></img>
                </Toolbar>
            </AppBar>

        );
    }
}
Header.propTypes = {
    title: PropTypes.string,
    onMenuClick: PropTypes.func
};
export default withStyles(styles, { withTheme: true })(Header);