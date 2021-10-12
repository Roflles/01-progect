import React from 'react';
import {connect} from 'react-redux';
import {follow, requestUsers, toggleFollowingProgress, unfollow,} from '../../redux/users-Reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (currentPage) => {
        const { pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   createPages={this.Paginator}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        toggleFollowingProgress, getUsers: requestUsers
    }),
)(UsersAPIComponent);