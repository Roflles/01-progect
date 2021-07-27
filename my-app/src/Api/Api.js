import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c19d7feb-c9a2-4d20-a2a3-d79e7daf7482"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
};

export const followAPI = {
    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
};

/*export const authAPI = {
    getAuthMe() {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    }
};

/!*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
        this.props.setUserProfile(response.data);

    });*!/*/



