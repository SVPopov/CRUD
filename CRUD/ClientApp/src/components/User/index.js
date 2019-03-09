import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';

import {
    getUserList,
    editUser,
    createUser,
    deleteUser,
} from '../../actions/user/UserActions';

import {
    Grid,
} from '@material-ui/core';

import MiniDrawer from '../MiniDrawer';

const styles = theme => ({
    formControl: {
        marginBottom: '15px',
        width: '100%',
    },
    iconButton: {
        marginTop: '8px',
        marginRight: '8px',
        padding: '0px',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    multiSelect:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

class User extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <h3>SPA</h3>
                </Grid>
                <Grid item xs={12}>
                    <MiniDrawer />
                </Grid>
            </Grid>)
    }
}

const mapStateToProps = state => ({
   
});

export default compose(
    connect(mapStateToProps),
    withStyles(styles)
)(User);
