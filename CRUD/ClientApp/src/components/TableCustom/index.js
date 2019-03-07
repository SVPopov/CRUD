import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';

class TableCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <h2>TODO: to fix display table with user data</h2>
        /*return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>User name</TableCell>
                        <TableCell>Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.Items.map((row, index) => {
                        console.log(row);
                        console.log(index);
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{row.number}</TableCell>
                                <TableCell >{row.name}</TableCell>
                                <TableCell >{row.department}</TableCell>
                            </TableRow>)
                    })}
                </TableBody>
            </Table>
        );*/
    }
}

const mapStateToProps = state => ({

});

export default TableCustom;
