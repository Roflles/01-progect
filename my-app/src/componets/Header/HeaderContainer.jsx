import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData, toggleIsFetching} from '../../redux/auth-Reducer';
import Preloader from '../Preloader/Preloader';
import {authAPI} from "../../Api/Api";

class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.getAuthMe().then(data => {
                this.props.toggleIsFetching(false);
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props}/>
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
};

const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData, toggleIsFetching
})(HeaderComponent);

export default HeaderContainer;