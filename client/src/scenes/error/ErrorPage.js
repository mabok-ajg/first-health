import React, { Component } from 'react';
import propTypes from 'prop-types';

class ErrorPage extends Component {

    render() {
        return (
            <div>
                <h1><strong><center>{this.props.code}<p>Oops! Page Not Found</p></center></strong></h1>
            </div>
        );
    }
}
Error.propTypes = {
    code: propTypes.number.isRequired
};

export default ErrorPage;
