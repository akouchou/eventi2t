import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './Contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(authContext);
    const { loading } = auth;

    if (loading) {
        return (
            <Route
                {...rest}
                render={() => {
                    return <div className="preloader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
                    </div>;
                }}
            />
        );
    }
    // if loading is set to true (when our function useEffect(() => {}, []) is not executed), we are rendering a loading component;

    return (
        <Route
            {...rest}
            render={routeProps => {
                return auth.data ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect to="/singin" />
                    );
            }}
        />
    );
};

export default PrivateRoute;