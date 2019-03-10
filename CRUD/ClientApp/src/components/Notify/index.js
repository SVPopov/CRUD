import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { connect } from 'react-redux';
import { compose } from 'redux';

class Notify extends Component {

    componentWillReceiveProps(props) {
        if (!!props.notification) {
            const {message,type} = props.notification;
            this.notify(message,type);
        }
    }

    notify = (message,type) => toast(message,{
        type: type,
    });

    render() {
        return (
            <ToastContainer />
        );
    }
}


const mapStateToProps = state => ({
    notification: state.notificationData.notification,
});

export default compose(
    connect(mapStateToProps),
)(Notify);
