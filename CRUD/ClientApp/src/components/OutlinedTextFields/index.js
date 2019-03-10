import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    getDepartmentList
} from '../../actions/department/DepartmentActions';
import {
    createUser
} from '../../actions/user/UserActions';

const styles = theme => ({
    container: {
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: '240px'
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        department: '',
        departments: []
    };


    componentWillMount() {
        this.props.dispatch(getDepartmentList());
    }

    componentWillReceiveProps(props) {
        if (!!props.departments) {
            this.setState({
                departments: props.departments,
                department: props.departments.length > 0 ? props.departments[0].id: '',
            });
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendForm = () => {
        const { name, department } = this.state;
        this.props.dispatch(createUser({
            Name: name,
            DepartmentId: department
        }));
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-dense"
                    label="Dense"
                    className={classNames(classes.textField, classes.dense)}
                    onChange={this.handleChange('name')}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    fullWidth
                    className={classes.textField}
                    value={this.state.department}
                    onChange={this.handleChange('department')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your department"
                    margin="normal"
                    variant="outlined"
                >
                    {this.state.departments.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.sendForm}
                >
                                Primary
                </Button>
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>  ({
    departments: state.departmentData.departments,
});

export default compose(
    connect(mapStateToProps),
    withStyles(styles)
)(OutlinedTextFields);