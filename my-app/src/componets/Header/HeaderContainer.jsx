import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-Reducer';

class HeaderComponent extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

const HeaderContainer = connect(mapStateToProps, {logout})(HeaderComponent);

export default HeaderContainer;