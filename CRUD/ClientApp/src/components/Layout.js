import React from 'react';
import Grid from '@material-ui/core/Grid';

export default props => (
    <Grid item xs={12}>
        {props.children}
    </Grid>
);
