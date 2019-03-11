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
    createUser, editUser
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
        name: !!this.props.user ? this.props.user.name : '',
        department: !!this.props.user ? this.props.user.department.id : '',
        departments: []
    };


    componentWillMount() {
        this.props.dispatch(getDepartmentList());
    }

    componentWillReceiveProps(props) {
        if (!!props.departments) {
            this.setState({
                departments: props.departments,
            });
        }
        console.log(this.state);
        if (!this.state.department) {
            this.setState({
                department: props.departments.length > 0 ? props.departments[0].id : '',
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
        const { isEditMode, user } = this.props;
        if (!!isEditMode) {
            this.props.dispatch(editUser({
                Id: user.id,
                Name: name,
                DepartmentId: department
            }));
        } else {
            this.props.dispatch(createUser({
                Name: name,
                DepartmentId: department
            }));
        }
    }

    render() {
        const { classes, isEditMode } = this.props;
        const { name, department } = this.state;
        console.log(this.state);
        console.log(this.props);
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-dense"
                    label="Name"
                    className={classNames(classes.textField, classes.dense)}
                    onChange={this.handleChange('name')}
                    value={name}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Department"
                    fullWidth
                    className={classes.textField}
                    value={department}
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
                    {!!isEditMode? 'Save':'Create'}
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