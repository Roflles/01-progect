import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, toggleFollowingProgress, unfollow,} from '../../redux/users-Reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    createPages(pages, pagesCount, currentPage) {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 4; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
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
                   createPages={this.createPages}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAc(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }

    }
}*/

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow,
    toggleFollowingProgress, getUsers
})(UsersAPIComponent);

export default UsersContainer;