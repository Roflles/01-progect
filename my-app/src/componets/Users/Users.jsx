import React from 'react';
import Paginator from "../Paginator/Paginator";
import User from "./User";


let Users = ({
                 totalUsersCount,
                 pageSize,
                 currentPage,
                 onPageChanged,
                 users,
                 ...props
             }) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {
            users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                                 key={u.id}
                />
            )}
    </div>
}
export default Users;