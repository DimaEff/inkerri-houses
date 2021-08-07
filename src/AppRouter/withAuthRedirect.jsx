import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import {getUser} from "../selectors/user_selectors";
import {getLoginRoute} from "../AppRouter/consts";


const withAuthRedirect = (Component) => {

    const RedirectComponent = ({user, match, ...props}) => {
        if (!user) return <Redirect to={'login'}/>;

        return <Component {...props}/>;
    }

    const mapStateToProps = (state) => {
        return {
            user: getUser(state),
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent);
};

export default withAuthRedirect;