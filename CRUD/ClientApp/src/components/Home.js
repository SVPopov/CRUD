import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MiniDrawer from './MiniDrawer/index';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Home extends Component {

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <h3>SPA</h3>
                </Grid>
                <Grid item xs={12}>
                    <MiniDrawer />
                </Grid>
            </Grid>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

});

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Home);
