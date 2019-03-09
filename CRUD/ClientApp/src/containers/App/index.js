import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import User from '../../components/User';

import Notify from '../../components/Notify';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class App extends Component {
    render() {

        const { classes } = this.props;

        return (
            <section>
                <div className="wrapper row">
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12}>
                            <div className="pageContents">
                                <Switch>
                                    <Route exact path="/" component={User}/>
                                </Switch>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Notify/>
            </section>
        );
    }
}

export default withStyles(styles)(App);
